import { techInterests, ecosystemFlow } from '@/data/portfolio';
import { Sparkles } from 'lucide-react';

export default function Interests() {
  return (
    <section id="interests" className="relative section-pad">
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">07 — Technology Interests</span>
          <h2 className="section-title">What Excites Me About <span className="gradient-text">Technology</span></h2>
          <p className="section-subtitle mx-auto">
            The areas of technology I'm most passionate about and actively exploring.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16 reveal">
          {techInterests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.name}
                className="glass-card px-5 py-3 flex items-center gap-2.5 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 group reveal"
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <Icon size={18} className="text-accent-cyan group-hover:scale-125 transition-transform duration-300" />
                <span className="text-sm font-medium text-slate-200">{interest.name}</span>
              </div>
            );
          })}
        </div>

        <div className="reveal">
          <h3 className="text-center text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">
            The Technology Ecosystem
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {ecosystemFlow.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.name} className="flex items-center gap-2 sm:gap-3">
                  <div className="relative glass-card px-4 py-3 sm:px-5 sm:py-4 flex items-center gap-2.5 hover:border-accent-cyan/40 transition-all duration-300 hover:-translate-y-1 group">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <Icon size={20} className="text-accent-cyan" />
                    </div>
                    <span className="relative text-sm font-semibold text-white">{node.name}</span>
                    {i === 0 && (
                      <Sparkles size={12} className="relative text-accent-blue animate-pulse" />
                    )}
                  </div>
                  {i < ecosystemFlow.length - 1 && (
                    <div className="relative">
                      <div className="hidden sm:block w-8 h-0.5 bg-gradient-to-r from-accent-blue/40 to-accent-cyan/40" />
                      <div className="sm:hidden w-0.5 h-4 bg-gradient-to-b from-accent-blue/40 to-accent-cyan/40 mx-auto" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-slate-600 mt-6 font-mono">
            AI → Software → Data → Cloud → Automation → People
          </p>
        </div>
      </div>
    </section>
  );
}
