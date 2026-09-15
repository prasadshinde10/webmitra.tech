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
    <section id="contact" className="relative w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary font-semibold mb-4">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-950">Start a Project</h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto text-balance">
            Tell us about your operational bottleneck, software requirement, or automation goal. We&apos;ll get back to you with an architectural proposal within 24 hours.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.07)]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-800 mb-2">Name</label>
                <input
                  id="name"
                  {...register('name', { required: true })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-950 placeholder:text-slate-400 text-sm"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-rose-600 text-xs mt-1 block">Name is required</span>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-950 placeholder:text-slate-400 text-sm"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-rose-600 text-xs mt-1 block">Valid email is required</span>}
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-slate-800 mb-2">Service or Solution Needed</label>
              <select
                id="service"
                {...register('service', { required: true })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-950 text-sm"
              >
                <option value="" className="text-slate-400">Select a technology domain</option>
                <option value="custom_software">Custom Software &amp; SaaS Development</option>
                <option value="process_automation">Business Process &amp; Workflow Automation</option>
                <option value="ai_ml">AI &amp; Machine Learning Solutions</option>
                <option value="erp_systems">Custom ERP &amp; Operations Systems</option>
                <option value="data_analytics">Data Analytics &amp; BI Dashboards</option>
                <option value="frontend_ux">Modern Frontend &amp; UI/UX Architecture</option>
              </select>
              {errors.service && <span className="text-rose-600 text-xs mt-1 block">Service is required</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-2">Message</label>
              <textarea
                id="message"
                {...register('message', { required: true })}
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none text-slate-950 placeholder:text-slate-400 text-sm"
                placeholder="Tell us about your project, current bottlenecks, or system requirements..."
              />
              {errors.message && <span className="text-rose-600 text-xs mt-1 block">Message is required</span>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-950 hover:bg-black text-white font-bold text-base py-4 rounded-xl hover:shadow-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending Request...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-emerald-600 font-medium text-center mt-4">Message sent successfully! We will contact you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-rose-600 font-medium text-center mt-4">Something went wrong. Please try again or reach out via WhatsApp.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
