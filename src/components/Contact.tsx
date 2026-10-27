import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactInfo } from '@/data/portfolio';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!form.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject';
    if (!form.message.trim()) newErrors.message = 'Please enter a message';
    else if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: 'Phone', value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: Linkedin, label: 'LinkedIn', value: contactInfo.linkedin, href: contactInfo.linkedin },
    { icon: Github, label: 'GitHub', value: contactInfo.github, href: contactInfo.github },
    { icon: MapPin, label: 'Location', value: contactInfo.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative section-pad">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">11 — Contact</span>
          <h2 className="section-title">Let's Build <span className="gradient-text">Something Great.</span></h2>
          <p className="section-subtitle mx-auto">
            Whether you're looking for a motivated ICT graduate, a technology enthusiast, a developer, or someone ready to learn and contribute, I'd love to connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 reveal">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="glass-card p-4 flex items-center gap-4 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-0.5 group">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={20} className="text-accent-cyan" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 uppercase tracking-wider">{link.label}</div>
                    <div className="text-sm text-white font-medium truncate">{link.value}</div>
                  </div>
                </div>
              );
              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-6 sm:p-8 reveal reveal-delay-2" noValidate>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`input-field ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`input-field ${errors.email ? 'input-error' : ''}`}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className={`input-field ${errors.subject ? 'input-error' : ''}`}
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.subject}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                placeholder="Tell me about the opportunity or just say hi..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-400 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === 'sent' ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-xs text-green-400 text-center mt-3">
                Thank you for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
