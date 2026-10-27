import { education, coursework, courseworkIntro } from '@/data/portfolio';
import { GraduationCap, BookOpen, ChevronRight } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative section-pad">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent-cyan/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">05 — Education</span>
          <h2 className="section-title">Education <span className="gradient-text">Pathway</span></h2>
          <p className="section-subtitle mx-auto">
            My academic journey from secondary school to ICT diploma.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 timeline-line" aria-hidden="true" />

          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <div
                key={i}
                className="relative pl-12 pb-8 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-accent-cyan -translate-x-1/2 ring-4 ring-ink-950 z-10">
                  <div className="absolute inset-0 rounded-full bg-accent-cyan animate-ping opacity-30" />
                </div>

                <div className="glass-card p-6 hover:border-accent-blue/30 transition-all duration-500 hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-white mb-1">{edu.qualification}</h3>
                      <p className="text-sm text-slate-400 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-xs text-accent-cyan font-mono">
                        <GraduationCap size={14} />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Relevant Coursework */}
        <div className="glass-card p-6 sm:p-8 reveal relative overflow-hidden group">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl group-hover:bg-accent-purple/15 transition-all duration-700" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                <BookOpen size={22} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Relevant Coursework</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {courseworkIntro}
            </p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((item, i) => (
                <span
                  key={item}
                  className="skill-pill text-xs reveal"
                  style={{ transitionDelay: `${i * 0.04}s` }}
                >
                  <ChevronRight size={12} className="text-accent-cyan" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
