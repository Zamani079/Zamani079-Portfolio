import { whyWorkWithMe } from '@/data/portfolio';

export default function WhyWorkWithMe() {
  return (
    <section id="why-me" className="relative section-pad">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-cyan/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">08 — Why Me</span>
          <h2 className="section-title">Why Work With <span className="gradient-text">Me?</span></h2>
          <p className="section-subtitle mx-auto">
            What I bring to a team beyond technical skills.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyWorkWithMe.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="glass-card p-6 reveal hover:border-accent-blue/30 transition-all duration-500 hover:-translate-y-1 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-accent-cyan" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
