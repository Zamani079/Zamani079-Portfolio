import { useState } from 'react';
import { skillCategories } from '@/data/portfolio';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="relative section-pad">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">02 — Skills</span>
          <h2 className="section-title">Technical <span className="gradient-text">Arsenal</span></h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I've worked with across my ICT journey. Hover any skill to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const CatIcon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-card p-6 reveal hover:border-accent-blue/20 transition-all duration-500"
                style={{ transitionDelay: `${catIdx * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
                    <CatIcon size={20} className="text-accent-cyan" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="skill-pill">
                          <SkillIcon size={14} className="text-accent-blue" />
                          {skill.name}
                        </div>

                        {isHovered && (
                          <div className="absolute bottom-full left-0 mb-2 z-20 w-56 glass rounded-xl p-3 text-xs text-slate-300 shadow-xl glow-border whitespace-normal">
                            <div className="flex items-center gap-2 mb-1.5 text-white font-medium">
                              <SkillIcon size={14} className="text-accent-cyan" />
                              {skill.name}
                            </div>
                            <p className="leading-relaxed">{skill.description}</p>
                            <div className="absolute top-full left-4 w-2 h-2 bg-ink-850 border-l border-b border-white/10 rotate-45 -mt-1" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
