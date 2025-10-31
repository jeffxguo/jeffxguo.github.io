'use client';

import { useActionState } from 'react';
import { sendEmail, ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const initialState: ContactFormState = {
  success: false,
  message: '',
};

export function ContactSection() {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center">Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="grid gap-4">
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" type="email" name="email" />
            <Textarea placeholder="Message" name="message" />
            <Button>Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
