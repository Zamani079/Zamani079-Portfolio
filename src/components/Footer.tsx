import { navItems, personal, contactInfo } from '@/data/portfolio';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent-blue/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-1 font-display font-bold text-xl text-white mb-4">
              <span className="text-accent-blue">&lt;</span>
              <span className="gradient-text">ZM</span>
              <span className="text-accent-purple">/&gt;</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-xs">
              {personal.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(item.href);
                    }}
                    className="text-sm text-slate-400 hover:text-accent-cyan transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get In Touch</h3>
            <p className="text-sm text-slate-400 mb-2">{contactInfo.email}</p>
            <p className="text-sm text-slate-400 mb-2">{contactInfo.phone}</p>
            <p className="text-sm text-slate-400">{contactInfo.location}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 {personal.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-accent-purple fill-accent-purple/30" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
