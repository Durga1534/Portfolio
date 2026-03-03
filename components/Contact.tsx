'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Check, Loader2, Mail, User, MessageSquare, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0a0a0f] py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-pink-400 bg-pink-500/10 border border-pink-500/20 tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300 text-sm font-medium flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-indigo-400" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-xl"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 text-sm font-medium flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-xl"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300 text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="h-32 resize-none bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500 focus:ring-indigo-500/20 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full glow-btn py-6 rounded-xl font-semibold text-white border-0 text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Status card */}
            <div className="glass-card rounded-2xl p-8 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-dot-pulse" />
                  <span className="text-emerald-400 font-semibold text-sm">Currently Available</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Open to Opportunities
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  I&apos;m actively looking for full-time roles as a Full Stack or Backend Developer.
                  If you&apos;re hiring or want to collaborate, let&apos;s connect!
                </p>
              </div>

              {/* Info rows */}
              <div className="space-y-3">
                {[
                  { icon: <Mail className="w-4 h-4" />, label: "Response Time", value: "Within 24 hours" },
                  { icon: <MessageSquare className="w-4 h-4" />, label: "Availability", value: "Open for full-time roles" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3 p-4 rounded-xl bg-white/4 border border-white/8">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">{label}</p>
                      <p className="text-sm text-white font-semibold">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct contact */}
              <div className="pt-2">
                <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">Connect directly</p>
                <div className="flex gap-3">
                  {[
                    {
                      icon: <FaGithub size={18} />,
                      label: "GitHub",
                      href: "https://github.com/Durga1534",
                      color: "hover:border-white/30 hover:text-white",
                    },
                    {
                      icon: <FaLinkedin size={18} />,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/durgaprasad23",
                      color: "hover:border-blue-500/40 hover:text-blue-400",
                    },
                    {
                      icon: <Mail size={18} />,
                      label: "Email",
                      href: "mailto:kondurudurgaprasad.2@gmail.com",
                      color: "hover:border-indigo-500/40 hover:text-indigo-400",
                    },
                  ].map(({ icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-xl glass-card text-slate-400 text-xs font-medium transition-all duration-300 ${color}`}
                    >
                      {icon}
                      <span>{label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="glass-card rounded-2xl p-6 border-l-2 border-indigo-500">
              <p className="text-slate-300 italic text-sm leading-relaxed">
                &ldquo;Great software is built by committed people who care deeply about the craft.
                That&apos;s the kind of developer I strive to be, every single day.&rdquo;
              </p>
              <p className="text-indigo-400 text-xs font-semibold mt-3">— Durga Prasad</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center mt-20 pb-4">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
        <p className="text-slate-600 text-sm">
          Designed & built by{" "}
          <span className="text-indigo-400 font-semibold">Durga Prasad</span> · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}