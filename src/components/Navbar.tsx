import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { navItems, personal } from '@/data/portfolio';
import { useScrolled } from '@/hooks/useScrolled';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds = navItems.map((n) => n.href.replace('#', ''));

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(40);
  const active = useActiveSection(sectionIds);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/[0.06] py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-1 font-display font-bold text-lg text-white"
          aria-label="Zamani Madonsela home"
        >
          <span className="text-accent-blue">&lt;</span>
          <span className="gradient-text-animated">ZMD.Madonsela</span>
          <span className="text-accent-purple">/&gt;</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`nav-link ${active === item.href.slice(1) ? 'active' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="/Zamani_Mdonsela_Resume.docx"
            download="Zamani_Madonsela_Resume.docx"
            className="btn-ghost text-sm"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2 -mr-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-4 mt-3 glass rounded-2xl p-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === item.href.slice(1)
                      ? 'text-white bg-accent-blue/15'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/Zamani_Mdonsela_Resume.docx"
            download="Zamani_Madonsela_Resume.docx"
            className="btn-ghost mt-3 w-full text-sm"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
