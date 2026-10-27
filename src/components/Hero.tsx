import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Download, Sparkles } from 'lucide-react';
import { personal } from '@/data/portfolio';

const codeLines = [
  'const future = build();',
  'future.create();',
  'future.innovate();',
  '// building technology',
  '// solving problems',
  '// creating impact',
];

const binaryStrings = ['01001000', '01100101', '01101100', '01101100', '01101111'];

function Stars() {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 20,
    color: ['#3b82f6', '#06b6d4', '#8b5cf6'][i % 3],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-drift"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
}

function FloatingCodeSymbols() {
  const symbols = ['{ }', '< />', '( )', '[ ]', ';', '=>', '&&', '||', '++', '!='];
  const items = symbols.map((sym, i) => ({
    sym,
    top: Math.random() * 80 + 10,
    left: Math.random() * 80 + 10,
    delay: Math.random() * 5,
    duration: Math.random() * 4 + 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute font-mono text-sm text-accent-blue/20 animate-float-slow select-none"
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.sym}
        </span>
      ))}
    </div>
  );
}

function BinaryRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block" aria-hidden="true">
      {binaryStrings.map((bin, i) => (
        <div
          key={i}
          className="absolute font-mono text-[10px] text-accent-cyan/15 animate-float-slower select-none"
          style={{
            top: `${Math.random() * 80 + 5}%`,
            left: `${(i + 1) * 18}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${8 + i}s`,
          }}
        >
          {bin}
        </div>
      ))}
    </div>
  );
}

function DataLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" aria-hidden="true">
      <defs>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="0" y1="20%" x2="100%" y2="30%" stroke="url(#line-grad)" strokeWidth="1" />
      <line x1="0" y1="60%" x2="100%" y2="50%" stroke="url(#line-grad)" strokeWidth="1" />
      <line x1="0" y1="80%" x2="100%" y2="70%" stroke="url(#line-grad)" strokeWidth="1" />
    </svg>
  );
}

function AnimatedLaptop() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const line = codeLines[currentLine];
    if (currentChar < line.length) {
      const timer = setTimeout(() => setCurrentChar((c) => c + 1), 60);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setVisibleLines((prev) => [...prev, line]);
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, 400);
    return () => clearTimeout(timer);
  }, [currentLine, currentChar]);

  const displayLine = currentLine < codeLines.length ? codeLines[currentLine].slice(0, currentChar) : '';

  return (
    <div className="relative animate-float-slow" style={{ animationDuration: '7s' }}>
      <div className="relative mx-auto w-full max-w-sm perspective">
        <div className="glass-card rounded-2xl p-1 glow-border-cyan">
          <div className="bg-ink-950 rounded-xl p-4 font-mono text-xs sm:text-sm min-h-[200px]">
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="space-y-1.5">
              {visibleLines.map((line, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-accent-blue/50 select-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className={line.startsWith('//') ? 'text-slate-500' : 'text-slate-300'}>
                    {line}
                  </span>
                </div>
              ))}
              {currentLine < codeLines.length && (
                <div className="flex items-start gap-2">
                  <span className="text-accent-blue/50 select-none">{String(currentLine + 1).padStart(2, '0')}</span>
                  <span className={displayLine.startsWith('//') ? 'text-slate-500' : 'text-slate-300'}>
                    {displayLine}
                    <span className="inline-block w-2 h-4 bg-accent-cyan animate-blink ml-0.5 align-middle" />
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto w-[110%] -ml-[5%] h-3 bg-gradient-to-b from-ink-700 to-ink-800 rounded-b-xl" />
      </div>

      <div className="absolute -top-6 -right-6 glass rounded-xl px-3 py-2 text-xs font-mono text-accent-cyan animate-float-slower hidden sm:block">
        <Sparkles size={12} className="inline mr-1" />
        building...
      </div>
      <div className="absolute -bottom-4 -left-6 glass rounded-xl px-3 py-2 text-xs font-mono text-accent-purple animate-float-slow hidden sm:block" style={{ animationDelay: '1.5s' }}>
        const dev = 'Zamani';
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/50 to-ink-950" aria-hidden="true" />
      <Stars />
      <Particles />
      <FloatingCodeSymbols />
      <BinaryRain />
      <DataLines />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-accent-cyan mb-6 reveal in-view">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
              </span>
              Available for opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 text-balance">
              Hi, I'm <span className="gradient-text-animated">Zamani</span>.
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
              {personal.title}
            </p>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-4 leading-relaxed">
              {personal.intro}
            </p>
            <p className="text-accent-cyan text-sm sm:text-base font-medium mb-8 italic">
              "{personal.tagline}"
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <button onClick={() => scrollTo('#projects')} className="btn-primary">
                View My Work
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-ghost">
                <Mail size={18} />
                Let's Connect
              </button>
            </div>

            <a
              href="/Zamani_Mdonsela_Resume.docx"
              download="Zamani_Madonsela_Resume.docx"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-accent-cyan transition-colors group"
            >
              <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float-slow" style={{ animationDuration: '7s' }}>
              <div className="relative mx-auto w-full max-w-sm perspective">
                <div className="glass-card rounded-2xl p-1.5 glow-border-cyan">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="/WhatsApp_Image_2026-08-12_at_09.41.42.jpeg"
                      alt="Zamani Madonsela"
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass rounded-xl px-3 py-2 text-xs font-mono text-accent-cyan animate-float-slower hidden sm:block">
                <Sparkles size={12} className="inline mr-1" />
                building...
              </div>
              <div className="absolute -bottom-4 -left-6 glass rounded-xl px-3 py-2 text-xs font-mono text-accent-purple animate-float-slow hidden sm:block" style={{ animationDelay: '1.5s' }}>
                const dev = 'Zamani';
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-5 h-9 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-accent-cyan animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
