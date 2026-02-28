'use server';

import { Resend } from 'resend';

// Initialize Resend with error handling
const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export async function submitContactForm(formData: FormData) {
    try {
        // Check if Resend is properly initialized
        if (!resend) {
            console.error('❌ Resend not initialized - API key missing');
            return {
                success: false,
                error: 'Email service is not configured. Please contact us directly.',
            };
        }

        // Verify reCAPTCHA
        const recaptchaToken = formData.get('recaptchaToken') as string;
        if (!recaptchaToken || recaptchaToken === 'fallback') {
            console.error('❌ reCAPTCHA token missing or invalid');
            return {
                success: false,
                error: 'reCAPTCHA verification failed. Please try again.',
            };
        }

        const recaptchaSecretKey = process.env.RECAPTCHA_API_KEY_PRIVATE?.trim();
        if (!recaptchaSecretKey) {
            console.error('❌ RECAPTCHA_API_KEY_PRIVATE is not configured');
            return {
                success: false,
                error: 'Server configuration error. Please contact us directly.',
            };
        }

        // Verify reCAPTCHA token with Google
        try {
            const recaptchaResponse = await fetch(
                'https://www.google.com/recaptcha/api/siteverify',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        secret: recaptchaSecretKey,
                        response: recaptchaToken,
                    }),
                }
            );

            if (!recaptchaResponse.ok) {
                const errorText = await recaptchaResponse.text();
                console.error('❌ reCAPTCHA API request failed:', {
                    status: recaptchaResponse.status,
                    statusText: recaptchaResponse.statusText,
                    body: errorText,
                });
                return {
                    success: false,
                    error: 'reCAPTCHA verification failed. Please try again.',
                };
            }

            const recaptchaData = await recaptchaResponse.json();

            if (!recaptchaData.success) {
                console.error('❌ reCAPTCHA verification failed:', {
                    success: recaptchaData.success,
                    errorCodes: recaptchaData['error-codes'],
                    fullResponse: recaptchaData,
                });
                
                // Provide more specific error message based on error codes
                const errorCodes = recaptchaData['error-codes'] || [];
                if (errorCodes.includes('invalid-input-secret')) {
                    return {
                        success: false,
                        error: 'reCAPTCHA configuration error. Please contact support.',
                    };
                }
                if (errorCodes.includes('invalid-input-response')) {
                    return {
                        success: false,
                        error: 'reCAPTCHA token is invalid. Please refresh the page and try again.',
                    };
                }
                if (errorCodes.includes('browser-error')) {
                    return {
                        success: false,
                        error: 'reCAPTCHA browser error. Please refresh the page and try again.',
                    };
                }
                
                return {
                    success: false,
                    error: 'reCAPTCHA verification failed. Please try again.',
                };
            }

            // Verify the action name matches what we expect (important security check)
            // According to Google docs: "you should verify that the action name is the name you expect"
            if (recaptchaData.action !== 'contact') {
                console.error('❌ reCAPTCHA action mismatch:', {
                    expected: 'contact',
                    received: recaptchaData.action,
                });
                return {
                    success: false,
                    error: 'reCAPTCHA verification failed. Please try again.',
                };
            }

            // Verify hostname matches our domain (prevents token reuse from other sites)
            // Allow both production domain and localhost for development
            const allowedHostnames = [
                'languageservicesolutions.com',
                'localhost',
                "language-service-solutions-git-branch-add-resend-subud.vercel.app"
            ];
            if (
                recaptchaData.hostname &&
                !allowedHostnames.some((host) =>
                    recaptchaData.hostname.includes(host)
                )
            ) {
                console.error('❌ reCAPTCHA hostname mismatch:', {
                    expected: allowedHostnames,
                    received: recaptchaData.hostname,
                });
                return {
                    success: false,
                    error: 'reCAPTCHA verification failed. Please try again.',
                };
            }

            // Verify token is recent (tokens expire after 2 minutes)
            // challenge_ts is in ISO format: yyyy-MM-dd'T'HH:mm:ssZZ
            if (recaptchaData.challenge_ts) {
                const challengeTime = new Date(recaptchaData.challenge_ts).getTime();
                const currentTime = Date.now();
                const timeDifference = (currentTime - challengeTime) / 1000; // difference in seconds
                
                // Tokens expire after 2 minutes (120 seconds), add 30 second buffer for network delays
                if (timeDifference > 150) {
                    console.error('❌ reCAPTCHA token expired:', {
                        challengeTime: recaptchaData.challenge_ts,
                        ageInSeconds: timeDifference,
                    });
                    return {
                        success: false,
                        error: 'The form session has expired. Please refresh the page and submit again.',
                    };
                }
            }

            // Check score (v3 reCAPTCHA returns a score between 0.0 and 1.0)
            // 1.0 is very likely a good interaction, 0.0 is very likely a bot
            // Default threshold is 0.5 as recommended by Google
            if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
                console.warn('⚠️ reCAPTCHA score too low:', recaptchaData.score);
                return {
                    success: false,
                    error: 'reCAPTCHA verification failed. Please try again.',
                };
            }
        } catch (error) {
            console.error('❌ Error verifying reCAPTCHA:', error);
            return {
                success: false,
                error: 'reCAPTCHA verification failed. Please try again.',
            };
        }

        const name = formData.get('name') as string;
        const organization = formData.get('organization') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const serviceType = formData.get('serviceType') as string;
        const message = formData.get('message') as string;

        // Validate required fields
        if (!name || !email || !serviceType || !message) {
            return {
                success: false,
                error: 'Please fill in all required fields.',
            };
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return {
                success: false,
                error: 'Please enter a valid email address.',
            };
        }

        // Format service type for display
        const serviceTypeDisplay = serviceType
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        // Send email to your business    
        await resend.emails.send({
            from: 'Language Service Solutions<noreply@contact.languageservicesolutions.com>', // Replace with your verified domain
            to: ['murtado@languageservicesolutions.com'], // Replace with your business email
            subject: `New Contact Form Submission - ${serviceTypeDisplay}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #012b2d; color: white;">
          <!-- Header with Logo -->
          <div style="background-color: #012b2d; padding: 30px 20px; text-align: center;">
            <div style="display: inline-flex; justify-content: center; align-items: center; background-color: #012b2d; padding: 15px; border-radius: 50%; margin-bottom: 15px; height: 60px; width: 60px;">
              <img 
                src="https://languageservicesolutions.com//icons/logo.png" 
                alt="Language Service Solutions Logo" 
                width="60" 
                height="60" 
                style="width: 60px; height: 60px; display: block; max-width: 100%; height: auto; border-radius: 50%; color-scheme: light; -webkit-tap-highlight-color: transparent; filter: none !important;" 
              />
            </div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Language Service Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background-color: #012b2d;">
            <div style="background-color: #014347; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: white; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Contact Information</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: white;"><strong>Name:</strong> ${name}</p>
                ${
                    organization
                        ? `<p style="margin: 0; color: white;"><strong>Organization:</strong> ${organization}</p>`
                        : ''
                }
                <p style="margin: 0; color: white;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffffff !important; text-decoration: underline;"></a>${email}</a></p>
                ${
                    phone
                        ? `<p style="margin: 0; color: white;"><strong>Phone:</strong> ${phone}</p>`
                        : ''
                }
                <p style="margin: 0; color: white;"><strong>Service Type:</strong> ${serviceTypeDisplay}</p>
              </div>
            </div>
            
            <div style="background-color: #014347; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: white; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Message</h3>
              <div style="background-color: rgba(255,255,255,0.1); padding: 20px; border-radius: 6px;">
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: white;">${message}</p>
              </div>
            </div>
            
            <div style="background-color: #014347; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; color: white; font-size: 14px; font-weight: 500;">
                <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our excellent customer service standards.
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #012b2d; padding: 20px; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 12px;">
              This email was sent from the Language Service Solutions contact form.
            </p>
          </div>
        </div>
      `,
        });

        // Send confirmation email to the customer
        await resend.emails.send({
            from: 'Language Service Solutions <noreply@contact.languageservicesolutions.com>',            to: [email],
            subject: 'Thank you for contacting Language Service Solutions',
            html: `
        <style>
          a[href^="mailto:"] { color: #ffffff !important; text-decoration: underline !important; }
        </style>
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #012b2d; color: white;">
          <!-- Header with Logo -->
          <div style="background-color: #012b2d; padding: 30px 20px; text-align: center;">
            <div style="display: inline-flex; justify-content: center; align-items: center; background-color: #012b2d; padding: 15px; border-radius: 50%; margin-bottom: 15px; height: 60px; width: 60px;">
              <img 
                src="https://languageservicesolutions.com/icons/logo.png" 
                alt="Language Service Solutions Logo" 
                width="60" 
                height="60" 
                style="width: 60px; height: 60px; display: block; max-width: 100%; height: auto; border-radius: 50%; color-scheme: light; -webkit-tap-highlight-color: transparent; filter: none !important;" 
              />
            </div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Thank You for Your Inquiry</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Language Service Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px; background-color: #012b2d;">
            <div style="margin-bottom: 25px;">
              <p style="color: white; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                <strong>Thank you for contacting Language Service Solutions!</strong><br/>
                  A member of our team will review your message and get back to you within 1-2 business days. If your request is urgent, feel free to call us directly on <strong>+1 919 949-9272</strong> and let us know about your situation.
              </p>
            </div>
            
            <div style="background-color: #014347; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: white; font-weight: bold; margin-top: 0; margin-bottom: 20px; font-size: 18px;">Your Submission Summary</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0; color: white;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0; color: white;"><strong>Service Type:</strong> ${serviceTypeDisplay}</p>
                ${
                    organization
                        ? `<p style="margin: 0; color: white;"><strong>Organization:</strong> ${organization}</p>`
                        : ''
                }
                <p style="margin: 0; color: white;"><strong>Contact Email:</strong> <a href="mailto:${email}" style="color: #ffffff !important; text-decoration: underline;">${email}</a></p>
                ${
                    phone
                        ? `<p style="margin: 0; color: white;"><strong>Phone:</strong> ${phone}</p>`
                        : ''
                }
              </div>
            </div>
            
            <div style="margin-bottom: 25px;">
              <p style="color: white; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                In the meantime, feel free to explore our website to learn more about our comprehensive language services.
                <a href="https://languageservicesolutions.com/services" style="color: white; text-decoration: underline; margin-left: 4px;">See our services</a>
              </p>
              
              <div style="background-color: rgba(255,255,255,0.1); padding: 20px; border-radius: 6px;">
                <p style="margin: 0; color: white; font-size: 14px;">
                  <strong>Our Services Include:</strong><br>
                  <ul style="list-style-type: disc; padding-left: 20px; color: white;">
                    <li style="margin-bottom: 5px;">Translation Services</li>
                    <li style="margin-bottom: 5px;">Interpretation Services</li>
                    <li style="margin-bottom: 5px;">Transcription Services</li>
                    <li style="margin-bottom: 5px;">Subtitling Services</li>
                    <li style="">Multilingual Event Support</li>
                  </ul>
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-bottom: 25px;">
              <p style="color: white; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
                Best regards,
              </p>
              <p style="color: white; font-size: 18px; font-weight: 600; margin: 0;">
                The Language Service Solutions Team
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #012b2d; padding: 20px; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.9); font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error('❌ Contact form submission error:', error);
        return {
            success: false,
            error: 'Failed to send message. Please try again or contact us directly.',
        };
    }
}
