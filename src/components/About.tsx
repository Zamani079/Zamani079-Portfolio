import { personal } from '@/data/portfolio';
import { Monitor, Sparkles, Code2, Target, Languages, ArrowRight, Globe } from 'lucide-react';

function DevIllustration() {
  return (
    <div className="relative glass-card rounded-2xl p-8 overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-accent-purple/5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-700" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-xs font-mono text-slate-500 ml-2">developer.js</span>
        </div>

        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-2">
            <span className="text-accent-purple">const</span>
            <span className="text-accent-cyan">developer</span>
            <span className="text-slate-500">=</span>
            <span className="text-slate-500">{'{'}</span>
          </div>
          <div className="pl-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-accent-blue">name</span>
              <span className="text-slate-500">:</span>
              <span className="text-green-400">'Zamani'</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-blue">role</span>
              <span className="text-slate-500">:</span>
              <span className="text-green-400">'ICT Graduate'</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-blue">passion</span>
              <span className="text-slate-500">:</span>
              <span className="text-green-400">'technology'</span>
              <span className="text-slate-500">,</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-blue">mindset</span>
              <span className="text-slate-500">:</span>
              <span className="text-green-400">'growth'</span>
              <span className="text-slate-500">,</span>
            </div>
          </div>
          <div className="text-slate-500">{'}'}</div>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-accent-purple">developer</span>
            <span className="text-slate-500">.</span>
            <span className="text-accent-cyan">build</span>
            <span className="text-slate-500">()</span>
            <span className="inline-block w-2 h-4 bg-accent-cyan animate-blink align-middle" />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
          <Monitor size={14} className="text-accent-blue animate-float-slow" />
          <span>Always building, always learning</span>
          <Sparkles size={14} className="text-accent-cyan animate-float-slower" />
        </div>
      </div>
    </div>
  );
}

function CareerGrowthVisual() {
  const steps = personal.careerGrowth;
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <div className="glass-card px-4 py-2.5 flex items-center gap-2 hover:border-accent-cyan/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-xs font-mono font-bold text-accent-cyan group-hover:scale-110 transition-transform duration-300">
              {i + 1}
            </div>
            <span className="text-sm font-semibold text-white">{step}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight size={16} className="text-accent-cyan/60 animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

function LanguagesBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {personal.languages.map((lang, i) => (
        <div
          key={lang}
          className="glass-card px-5 py-3 flex items-center gap-2.5 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 group reveal"
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          <Globe size={18} className="text-accent-cyan group-hover:scale-125 transition-transform duration-300" />
          <span className="text-sm font-semibold text-white">{lang}</span>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative section-pad">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">01 — About</span>
          <h2 className="section-title">{personal.aboutHeading}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="reveal">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {personal.aboutText}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code2 size={16} className="text-accent-blue" />
                My ICT Journey
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.aboutExposure.map((item, i) => (
                  <span
                    key={item}
                    className="skill-pill text-xs reveal"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-accent-cyan" />
                Who I Am
              </h3>
              <div className="flex flex-wrap gap-2">
                {personal.aboutTraits.map((trait, i) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-xl glass-card text-sm font-medium text-white reveal"
                    style={{ transitionDelay: `${i * 0.05}s` }}
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <DevIllustration />
          </div>
        </div>

        {/* Career Goals */}
        <div className="glass-card p-6 sm:p-8 reveal mb-16 relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/15 transition-all duration-700" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
                <Target size={22} className="text-accent-cyan" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Career Goals</h3>
            </div>
            <div className="space-y-4">
              {personal.careerGoals.map((goal, i) => (
                <p key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {goal}
                </p>
              ))}
            </div>
            <CareerGrowthVisual />
          </div>
        </div>

        {/* Languages */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
              <Languages size={20} className="text-accent-cyan" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Languages</h3>
          </div>
          <div className="flex justify-center">
            <LanguagesBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
