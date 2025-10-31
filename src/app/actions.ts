'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendEmail(
  _prevState: ContactFormState,
  formData: FormData
) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const errorMessages = Object.values(validatedFields.error.flatten().fieldErrors).join(', ');
    return {
      success: false,
      message: errorMessages,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jeffxguo@gmail.com',
      subject: 'New message from your portfolio',
      react: EmailTemplate({ name, email, message }),
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred while sending the message. Please try again later.',
    };
  }
}