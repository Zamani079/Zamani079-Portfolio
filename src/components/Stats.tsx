import { stats } from '@/data/portfolio';

export default function Stats() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-card p-5 text-center group hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={22} className="text-accent-cyan" />
                </div>
                <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 leading-tight">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
