import { certifications } from '@/data/portfolio';
import { Award, ExternalLink, Hash } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-pad">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">06 — Certifications</span>
          <h2 className="section-title">Certifications <span className="gradient-text">& Courses</span></h2>
          <p className="section-subtitle mx-auto">
            Continuous learning across AI, machine learning, leadership and professional development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name + cert.credentialId}
                className="glass-card p-5 reveal hover:border-accent-blue/30 transition-all duration-500 hover:-translate-y-1 group flex flex-col"
                style={{ transitionDelay: `${i * 0.04}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-accent-cyan" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white leading-tight">{cert.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.provider}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-3 flex-1">{cert.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
                  <span className="text-xs font-mono text-accent-cyan/70 flex items-center gap-1">
                    <Award size={12} />
                    {cert.date}
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 flex items-center gap-1" title={`Credential ID: ${cert.credentialId}`}>
                    <Hash size={10} />
                    {cert.credentialId}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
