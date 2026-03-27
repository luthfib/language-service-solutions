'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        'idle' | 'success' | 'error'
    >('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Load reCAPTCHA script
    useEffect(() => {
        const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;
        if (!siteKey) {
            console.warn('reCAPTCHA site key is not configured');
            return;
        }

        // Check if script already exists
        const existingScript = document.querySelector(
            `script[src*="recaptcha"]`
        );
        if (existingScript) {
            return;
        }

        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
            // reCAPTCHA script loaded
        };
        script.onerror = () => {
            console.error('Failed to load reCAPTCHA script');
        };
        document.head.appendChild(script);

        // Add CSS to hide reCAPTCHA badge
        const style = document.createElement('style');
        style.textContent = `
            .grecaptcha-badge {
                visibility: hidden !important;
                display: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            const scriptToRemove = document.querySelector(
                `script[src*="recaptcha"]`
            );
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
            const styleToRemove = document.querySelector('style');
            if (styleToRemove && styleToRemove.textContent?.includes('grecaptcha-badge')) {
                styleToRemove.remove();
            }
        };
    }, []);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Get reCAPTCHA token
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_API_KEY;
            if (!siteKey) {
                setSubmitStatus('error');
                setErrorMessage('reCAPTCHA is not configured. Please contact us directly.');
                setIsSubmitting(false);
                return;
            }

            if (typeof window !== 'undefined' && window.grecaptcha) {
                try {
                    // Use grecaptcha.ready() to ensure it's fully loaded
                    const token = await new Promise<string>((resolve, reject) => {
                        window.grecaptcha.ready(() => {
                            window.grecaptcha
                                .execute(siteKey, { action: 'contact' })
                                .then(resolve)
                                .catch(reject);
                        });
                    });
                    formData.append('recaptchaToken', token);
                } catch (recaptchaError) {
                    console.error('reCAPTCHA execution failed:', recaptchaError);
                    setSubmitStatus('error');
                    setErrorMessage('reCAPTCHA verification failed. Please refresh the page and try again.');
                    setIsSubmitting(false);
                    return;
                }
            } else {
                // Wait a bit for script to load, then retry
                await new Promise((resolve) => setTimeout(resolve, 1000));
                if (typeof window !== 'undefined' && window.grecaptcha) {
                    try {
                        const token = await new Promise<string>((resolve, reject) => {
                            window.grecaptcha.ready(() => {
                                window.grecaptcha
                                    .execute(siteKey, { action: 'contact' })
                                    .then(resolve)
                                    .catch(reject);
                            });
                        });
                        formData.append('recaptchaToken', token);
                    } catch (recaptchaError) {
                        console.error('reCAPTCHA execution failed after retry:', recaptchaError);
                        setSubmitStatus('error');
                        setErrorMessage('reCAPTCHA verification failed. Please refresh the page and try again.');
                        setIsSubmitting(false);
                        return;
                    }
                } else {
                    setSubmitStatus('error');
                    setErrorMessage('reCAPTCHA is not loaded. Please refresh the page and try again.');
                    setIsSubmitting(false);
                    return;
                }
            }

            const result = await submitContactForm(formData);

            if (result.success) {
                setSubmitStatus('success');
                // Reset form
                const form = document.getElementById(
                    'contact-form'
                ) as HTMLFormElement;
                form?.reset();
            } else {
                setSubmitStatus('error');
                setErrorMessage(
                    result.error || 'Something went wrong. Please try again.'
                );
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className=" border border-[color:var(--border)] bg-white/90 backdrop-blur rounded-[var(--border-radius)] w-full max-w-2xl mx-auto">
            <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-center font-semibold text-[color:var(--green-darker)] tracking-wide">
                    We'd Love to Hear from You!
                </CardTitle>
                <CardDescription className="text-md text-center text-[color:var(--green-darker)] opacity-80">
                    Fill out the form below and we'll get back to you within 1-2
                    business days.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {isSubmitting && (
                    <Alert className="mb-6 border-blue-200 bg-blue-50 rounded-[var(--border-radius)]">
                        <Loader2 className="h-4 w-4 text-blue-600 animate-spin" />
                        <AlertDescription className="text-blue-800">
                            Processing your request... Please wait.
                        </AlertDescription>
                    </Alert>
                )}

                {submitStatus === 'success' && (
                    <Alert className="mb-6 border-green-200 bg-green-50 rounded-[var(--border-radius)]">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                            Thank you for contacting Language Service Solutions!
                            We've received your message and will get back to you
                            in 1-2 business days.
                        </AlertDescription>
                    </Alert>
                )}

                {submitStatus === 'error' && (
                    <Alert className="mb-6 border-red-200 bg-red-50 rounded-[var(--border-radius)]">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <AlertDescription className="text-red-800">
                            {errorMessage}
                        </AlertDescription>
                    </Alert>
                )}

                <form
                    id="contact-form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        await handleSubmit(formData);
                    }}
                    className={`space-y-6 transition-opacity duration-300 ${
                        isSubmitting ? 'opacity-75 pointer-events-none' : ''
                    }`}
                >
                    <div
                        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
                        aria-hidden="true"
                    >
                        <Label htmlFor="website">Website</Label>
                        <Input
                            id="website"
                            name="website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="name"
                                className="text-[color:var(--green-darker)] font-semibold"
                            >
                                Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                required
                                placeholder="Your full name"
                                className="border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="organization"
                                className="text-[color:var(--green-darker)] font-semibold"
                            >
                                Organization/Company Name
                            </Label>
                            <Input
                                id="organization"
                                name="organization"
                                placeholder="Your organization"
                                className="border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-[color:var(--green-darker)] font-semibold"
                            >
                                Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="your.email@example.com"
                                className="border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label
                                htmlFor="phone"
                                className="text-[color:var(--green-darker)] font-semibold"
                            >
                                Phone
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Your phone number"
                                className="border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="serviceType"
                            className="text-[color:var(--green-darker)] font-semibold"
                        >
                            Service Type <span className="text-red-500">*</span>
                        </Label>
                        <Select name="serviceType" required>
                            <SelectTrigger 
                                className="border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95"
                                aria-label="Select a service type"
                            >
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="translation">
                                    Translation
                                </SelectItem>
                                <SelectItem value="transcription">
                                    Transcription
                                </SelectItem>
                                <SelectItem value="interpretation">
                                    Interpretation
                                </SelectItem>
                                <SelectItem value="subtitling">
                                    Subtitling
                                </SelectItem>
                                <SelectItem value="multilingual-event-support">
                                    Multilingual Event Support
                                </SelectItem>
                                <SelectItem value="other">
                                    Other (please describe in your message
                                    below)
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="message"
                            className="text-[color:var(--green-darker)] font-semibold"
                        >
                            Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Tell us about your project or requirements..."
                            className="min-h-[120px] border-[color:var(--border)] focus:border-[color:var(--green)] focus:ring-[color:var(--green)] rounded-[var(--border-radius)] bg-white/95 resize-none"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full font-semibold py-6 px-6 rounded-[var(--border-radius)] transition-all duration-300 shadow-md text-lg tracking-wide ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed opacity-75'
                                : 'bg-[color:var(--green-darker)] hover:bg-[color:var(--green)] text-white hover:scale-[1.02] active:scale-[0.98]'
                        }`}
                        style={{
                            boxShadow: isSubmitting
                                ? '0 2px 4px 0 rgba(0,0,0,0.1)'
                                : '0 2px 8px 0 rgba(1,177,176,0.08)',
                        }}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </form>

                {/* reCAPTCHA Notice */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        This site is protected by reCAPTCHA and the Google{' '}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[color:var(--green)] hover:underline"
                        >
                            Privacy Policy
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://policies.google.com/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[color:var(--green)] hover:underline"
                        >
                            Terms of Service
                        </a>{' '}
                        apply.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
