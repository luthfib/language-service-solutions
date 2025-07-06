'use server';

import { Resend } from 'resend';

// Debug: Check if the API key is loaded
console.log(
    'RESEND_API_KEY:',
    process.env.RESEND_API_KEY ? '✅ Loaded' : '❌ Missing'
);
console.log('API Key length:', process.env.RESEND_API_KEY?.length || 0);

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

        console.log('📧 Attempting to send emails...');

        // Send email to your business
        await resend.emails.send({
            from: 'Contact Form <noreply@contact.languageservicesolutions.com>', // Replace with your verified domain
            to: ['noreply@contact.languageservicesolutions.com'], // Replace with your business email
            subject: `New Contact Form Submission - ${serviceTypeDisplay}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #01b1b0 0%, #008f8e 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <div style="display: inline-flex; justify-content: center; align-items: center; background-color: white; padding: 15px; border-radius: 50%; margin-bottom: 15px; height: 60px; width: 60px;">
              <img 
                src="https://languageservicesolutions.com/icons/logo_green.png" 
                alt="Language Service Solutions Logo" 
                width="60" 
                height="60" 
                style="width: 60px; height: 60px; display: block; max-width: 100%; height: auto; border-radius: 50%; background: white;" 
              />
            </div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Language Service Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <div style="background-color: #f8fafc; padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #01b1b0;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px; font-size: 18px;">📋 Contact Information</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0;"><strong>Name:</strong> <span style="color: #374151;">${name}</span></p>
                ${
                    organization
                        ? `<p style="margin: 0;"><strong>Organization:</strong> <span style="color: #374151;">${organization}</span></p>`
                        : ''
                }
                <p style="margin: 0;"><strong>Email:</strong> <span style="color: #374151;">${email}</span></p>
                ${
                    phone
                        ? `<p style="margin: 0;"><strong>Phone:</strong> <span style="color: #374151;">${phone}</span></p>`
                        : ''
                }
                <p style="margin: 0;"><strong>Service Type:</strong> <span style="color: #374151;">${serviceTypeDisplay}</span></p>
              </div>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 20px; font-size: 18px;">💬 Message</h3>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 3px solid #01b1b0;">
                <p style="white-space: pre-wrap; line-height: 1.6; margin: 0; color: #374151;">${message}</p>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px; font-weight: 500;">
                ⏰ <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our excellent customer service standards.
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              This email was sent from the Language Service Solutions contact form.
            </p>
          </div>
        </div>
      `,
        });

        // Send confirmation email to the customer
        await resend.emails.send({
            from: 'Language Service Solutions <noreply@contact.languageservicesolutions.com>', // Replace with your verified domain
            to: [email],
            subject: 'Thank you for contacting Language Service Solutions',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header with Logo -->
          <div style="background: linear-gradient(135deg, #01b1b0 0%, #008f8e 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <div style="display: inline-flex; justify-content: center; align-items: center; background-color: white; padding: 15px; border-radius: 50%; margin-bottom: 15px; height: 60px; width: 60px;">
              <img 
                src="https://languageservicesolutions.com/icons/logo_green.png" 
                alt="Language Service Solutions Logo" 
                width="60" 
                height="60" 
                style="width: 60px; height: 60px; display: block; max-width: 100%; height: auto; border-radius: 50%; background: white;" 
              />
            </div>
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">Thank You for Your Inquiry</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Language Service Solutions</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px 20px;">
            <div style="margin-bottom: 25px;">
              <p style="color:#012b2d; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Dear <strong>${name}</strong>,
              </p>
              
              <p style="color:#012b2d; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for reaching out to Language Service Solutions. We have received your inquiry regarding <strong>${serviceTypeDisplay}</strong> services and will get back to you within 24 hours.
              </p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 25px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #01b1b0;">
              <h3 style="font-weight:bold; margin-top: 0; margin-bottom: 20px; font-size: 18px;">📋 Your Submission Summary</h3>
              <div style="display: grid; gap: 12px;">
                <p style="margin: 0;"><strong>Service Type:</strong> <span style="color: #012b2d;">${serviceTypeDisplay}</span></p>
                ${
                    organization
                        ? `<p style="margin: 0;"><strong>Organization:</strong> <span style="color: #012b2d;">${organization}</span></p>`
                        : ''
                }
                  <p style="margin: 0;"><strong>Contact Email:</strong> <span style="color: #012b2d;">${email}</span></p>
                ${
                    phone
                        ? `<p style="margin: 0;"><strong>Phone:</strong> <span style="color: #012b2d;">${phone}</span></p>`
                        : ''
                }
              </div>
            </div>
            
            <div style="background-color: #ffffff; margin-bottom: 25px;">
              <p style="color: #012b2d; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                In the meantime, feel free to explore our website to learn more about our comprehensive language services.
              </p>
              
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 20px; border-radius: 6px; border-left: 3px solid #01b1b0;">
                <p style="margin: 0; color: #012b2d; font-size: 14px;">
                  <strong>Our Services Include:</strong><br>
                  <ul style="list-style-type: disc; padding-left: 20px;">
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
              <p style="color: #012b2d; font-size: 16px; line-height: 1.6; margin-bottom: 10px;">
                Best regards,
              </p>
              <p style="color: #01b1b0; font-size: 18px; font-weight: 600; margin: 0;">
                The Language Service Solutions Team
              </p>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `,
        });

        console.log('✅ Emails sent successfully');
        return { success: true };
    } catch (error) {
        console.error('❌ Contact form submission error:', error);
        return {
            success: false,
            error: 'Failed to send message. Please try again or contact us directly.',
        };
    }
}
