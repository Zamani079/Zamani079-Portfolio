import { achievements, beyondTheCode } from '@/data/portfolio';
import { Smile } from 'lucide-react';

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-pad">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">10 — Achievements</span>
          <h2 className="section-title">Milestones & <span className="gradient-text">Achievements</span></h2>
          <p className="section-subtitle mx-auto">
            Key milestones from my ICT journey so far.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card p-5 flex items-center gap-4 reveal hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-accent-cyan" />
                </div>
                <span className="text-sm font-medium text-slate-200">{item.title}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center reveal">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-4">
            <Smile size={14} />
            Beyond The Code
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Technology is serious. <span className="gradient-text">The journey doesn't have to be.</span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Beyond the screen and the code, here's what keeps me going.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {beyondTheCode.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-card px-4 py-2.5 flex items-center gap-2 hover:border-accent-purple/30 transition-all duration-300 hover:-translate-y-1 group reveal"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <Icon size={16} className="text-accent-purple group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm text-slate-200">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
