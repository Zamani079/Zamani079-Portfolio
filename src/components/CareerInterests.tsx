import { careerInterests, careerInterestsFocus } from '@/data/portfolio';
import { Briefcase, Compass, Monitor, Wrench, Cpu, Code2, Bug, Bot } from 'lucide-react';

const interestIcons = [Monitor, Wrench, Cpu, Code2, Briefcase, Code2, Bug, Bot];

export default function CareerInterests() {
  return (
    <section id="career" className="relative section-pad">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">09 — Career</span>
          <h2 className="section-title">Where I Want To <span className="gradient-text">Grow</span></h2>
          <p className="section-subtitle mx-auto">
            Building my career in IT — developing technical expertise and providing excellent technical support.
          </p>
        </div>

        {/* Primary Focus */}
        <div className="text-center mb-8 reveal">
          <div className="inline-flex items-center gap-2.5 glass-card px-6 py-4 border-accent-cyan/30">
            <Monitor size={20} className="text-accent-cyan" />
            <span className="text-base font-bold text-white">Primary Interest: IT Support / Technical Support</span>
          </div>
        </div>

        <p className="text-center text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-10 reveal leading-relaxed">
          {careerInterestsFocus}
        </p>

        {/* Skill Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {careerInterests.map((role, i) => {
            const Icon = interestIcons[i % interestIcons.length];
            return (
              <div
                key={role}
                className="glass-card px-4 py-4 flex items-center gap-2.5 hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1 group reveal"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <Icon size={18} className="text-accent-blue group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                <span className="text-sm font-medium text-slate-200">{role}</span>
              </div>
            );
          })}
        </div>

        <div className="text-center reveal">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-slate-300">
            <Compass size={16} className="text-accent-cyan" />
            Open to opportunities where I can contribute, learn and grow
          </div>
        </div>
      </div>
    </section>
  );
}
