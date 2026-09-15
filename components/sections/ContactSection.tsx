'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus('idle');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section className="relative w-full py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Start a Project</h2>
          <p className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                {...register('name', { required: true })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">Valid email is required</span>}
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">Service Required</label>
            <select
              {...register('service', { required: true })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-white"
            >
              <option value="" className="text-black">Select a service</option>
              <option value="3d_website" className="text-black">3D Immersive Website</option>
              <option value="web_app" className="text-black">Web Application</option>
              <option value="ui_ux" className="text-black">UI/UX Design</option>
            </select>
            {errors.service && <span className="text-red-500 text-xs mt-1">Service is required</span>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              {...register('message', { required: true })}
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Tell us about your project..."
            />
            {errors.message && <span className="text-red-500 text-xs mt-1">Message is required</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-4">Message sent successfully! We will contact you soon at your webmitra.tech domain email.</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-4">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
