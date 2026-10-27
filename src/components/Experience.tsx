import { experience } from '@/data/portfolio';
import { Building2, Calendar, CheckCircle2, Cpu } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative section-pad">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">03 — Experience</span>
          <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle mx-auto">
            My experience in the technology industry, building skills and contributing to teams.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 timeline-line sm:-translate-x-1/2" aria-hidden="true" />

          {experience.map((exp, idx) => (
            <div
              key={exp.company}
              className={`relative flex items-start gap-6 mb-12 reveal ${
                idx % 2 === 0 ? 'sm:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-accent-cyan -translate-x-1/2 sm:-translate-x-1/2 mt-6 z-10 ring-4 ring-ink-950">
                <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-30" />
              </div>

              <div className={`w-full sm:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'sm:pr-0 sm:pl-8' : 'sm:pr-8'} pl-12 sm:pl-0`}>
                <div className="glass-card p-6 hover:border-accent-blue/30 transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-center gap-2 text-accent-cyan mb-2">
                    <Building2 size={16} />
                    <span className="text-sm font-semibold">{exp.company}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{exp.role}</h3>

                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                    <Calendar size={14} />
                    {exp.dates}
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{exp.description}</p>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Cpu size={14} className="text-accent-blue" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle2 size={14} className="text-accent-cyan/60 mt-0.5 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-pill text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Achievements</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-accent-purple mt-1.5 text-xs">◆</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
