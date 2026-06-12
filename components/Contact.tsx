'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, Check, Loader2 } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { siteConfig } from '@/lib/site';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send. Please email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full bg-transparent border-0 border-b border-border rounded-none px-0 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:ring-0 focus-visible:outline-none transition-colors';

  return (
    <section id="contact" className="section-padding scroll-mt-20 border-t border-border mesh-bg">
      <div className="page-container relative z-10">
        <SectionHeader
          number="05 — Contact"
          title="Let's build something."
          subtitle="Open to full-time backend and full-stack roles. I reply within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface p-8 bg-card space-y-8"
            noValidate
          >
            <div>
              <label htmlFor="name" className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="font-mono-label text-xs text-muted-foreground tracking-wider uppercase">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                placeholder="Tell me about the role or project..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}

            <button type="submit" disabled={isSubmitting} className="btn-primary disabled:opacity-50">
              {isSubmitting ? (
                <><Loader2 size={16} className="animate-spin" /> Sending</>
              ) : isSubmitted ? (
                <><Check size={16} /> Sent</>
              ) : (
                'Send message'
              )}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono-label text-xs text-muted-foreground">Available now</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Looking for a full-time role as a Backend or Full-Stack Engineer. Happy to walk
                through any project, architecture decision, or code on a call.
              </p>
            </div>

            <div className="space-y-1">
              {[
                { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { label: 'GitHub', value: 'Durga1534', href: siteConfig.github },
                { label: 'LinkedIn', value: 'durgaprasad23', href: siteConfig.linkedin },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-border group surface-hover px-2 -mx-2 rounded-lg"
                >
                  <div>
                    <p className="font-mono-label text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-foreground group-hover:opacity-80 transition-opacity mt-0.5">
                      {item.value}
                    </p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>

            <blockquote className="border-l-2 border-border pl-5">
              <p className="text-muted-foreground text-sm italic leading-relaxed">
                &ldquo;I care about the craft — reliable systems, clear code, and products that
                actually ship.&rdquo;
              </p>
              <cite className="font-mono-label text-xs text-muted-foreground not-italic mt-2 block">
                — Durga Prasad
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
