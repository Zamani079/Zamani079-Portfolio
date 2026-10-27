import { useEffect, useState } from 'react';
import { ExternalLink, ArrowDown, BrainCircuit, ChevronRight, Target, Lightbulb, CheckCircle2, Sparkles, Activity, Shield, Mail, GitBranch, Cpu, Database, Workflow, Bot, Code2, Server, Zap, Search, Bell, Settings, Eye } from 'lucide-react';
import { projects, smartTicketContribution, smartTicketLearned } from '@/data/portfolio';
import type { Project } from '@/data/portfolio';

const featureIcons = [
  BrainCircuit, GitBranch, Mail, Activity, Eye, CheckCircle2, Bell, Server, Sparkles, Shield, Search, Workflow, Settings,
];

function WorkflowAnimation({ flow }: { flow: string[] }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (flow.length + 1));
    }, 1800);
    return () => clearInterval(interval);
  }, [flow.length]);

  return (
    <div className="glass-card p-5 sm:p-6 mt-6 relative overflow-hidden">
      <div className="text-xs font-mono text-slate-500 mb-5 flex items-center gap-2">
        <span className="text-accent-cyan animate-pulse">●</span>
        System Workflow Pipeline
      </div>
      <div className="flex flex-col gap-1">
        {flow.map((step, i) => {
          const isActive = activeStep === i || (activeStep > i && activeStep < flow.length);
          const isCurrent = activeStep === i;
          return (
            <div key={step}>
              <div
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-500 ${
                  isCurrent
                    ? 'bg-accent-blue/15 border border-accent-blue/30'
                    : isActive
                    ? 'bg-accent-cyan/5 border border-accent-cyan/10'
                    : 'border border-transparent'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-md text-xs font-mono font-bold transition-all duration-500 ${
                    isCurrent
                      ? 'bg-accent-blue text-white scale-110'
                      : isActive
                      ? 'bg-accent-cyan/20 text-accent-cyan'
                      : 'bg-ink-700 text-slate-500'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-sm font-medium transition-colors duration-500 ${
                    isCurrent ? 'text-white' : isActive ? 'text-accent-cyan' : 'text-slate-500'
                  }`}
                >
                  {step}
                </span>
                {isCurrent && (
                  <span className="ml-auto text-xs text-accent-blue animate-pulse">processing...</span>
                )}
              </div>
              {i < flow.length - 1 && (
                <div className="flex justify-center py-0.5 relative">
                  <ArrowDown
                    size={14}
                    className={isActive ? 'text-accent-cyan animate-bounce' : 'text-slate-600'}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MockDashboard() {
  return (
    <div className="glass-card p-5 sm:p-6 relative overflow-hidden group">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-full blur-3xl group-hover:scale-110 transition-all duration-700" />

      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-mono text-slate-400">SmartTicket AI — Live Dashboard Preview</span>
          </div>
          <span className="text-xs font-mono text-slate-600">Conceptual Visual</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {/* Ticket Card */}
          <div className="glass rounded-xl p-4 border border-accent-blue/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BrainCircuit size={16} className="text-accent-cyan" />
                <span className="text-xs font-mono text-slate-400">AI Support</span>
              </div>
              <span className="text-xs font-mono text-slate-600">#1024</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Priority</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-red-500/20 text-red-400 border border-red-500/30 font-medium">High</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Department</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-accent-blue/15 text-accent-blue border border-accent-blue/25 font-medium">IT Support</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Status</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500/15 text-yellow-400 border border-yellow-500/25 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                  In Progress
                </span>
              </div>
            </div>
          </div>

          {/* AI Confidence Card */}
          <div className="glass rounded-xl p-4 border border-accent-purple/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent-purple" />
                <span className="text-xs font-mono text-slate-400">AI Confidence</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Classification</span>
                <span className="text-xs text-accent-cyan font-mono font-bold">94%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-ink-700 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-cyan" style={{ width: '94%' }} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-500">Governance</span>
                <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/15 text-green-400 border border-green-500/25 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Human Review</span>
                <span className="text-xs text-accent-purple font-mono">Enabled</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-4 text-center font-mono">
          Conceptual visual representation — not production statistics
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ feature, icon: Icon, index }: { feature: string; icon: typeof BrainCircuit; index: number }) {
  return (
    <div
      className="glass-card p-4 hover:border-accent-blue/30 transition-all duration-300 hover:-translate-y-1 group reveal"
      style={{ transitionDelay: `${index * 0.04}s` }}
    >
      <div className="flex items-start gap-3">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 shrink-0 group-hover:scale-110 transition-transform duration-300">
          <Icon size={18} className="text-accent-cyan" />
        </div>
        <span className="text-sm text-slate-300 font-medium leading-snug pt-1.5">{feature}</span>
      </div>
    </div>
  );
}

function ContributionSection() {
  return (
    <div className="glass-card p-6 sm:p-8 mt-6 reveal relative overflow-hidden group border-l-2 border-l-accent-blue/40">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20">
            <Target size={20} className="text-accent-cyan" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">My Contribution</h4>
        </div>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {smartTicketContribution}
        </p>
      </div>
    </div>
  );
}

function WhatILearned() {
  return (
    <div className="glass-card p-6 sm:p-8 mt-6 reveal relative overflow-hidden group border-l-2 border-l-accent-purple/40">
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-blue/20">
            <Lightbulb size={20} className="text-accent-purple" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white">What I Learned</h4>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {smartTicketLearned.map((item, i) => (
            <div
              key={item}
              className="flex items-center gap-2.5 glass rounded-xl px-4 py-2.5 hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-0.5 group-item reveal"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 flex items-center justify-center text-xs font-mono font-bold text-accent-cyan">
                {i + 1}
              </div>
              <span className="text-sm text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="glass-card p-6 sm:p-8 lg:p-10 reveal hover:border-accent-blue/30 transition-all duration-500 relative overflow-hidden group">
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.accent} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700`} />

      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest">Featured Capstone Project</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-accent-purple/15 text-accent-purple border border-accent-purple/20">
            {project.category}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} shrink-0`}>
            <Icon size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
            <p className="text-accent-cyan text-sm font-medium">{project.tagline}</p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">{project.description}</p>

        {/* Mock Dashboard */}
        <MockDashboard />

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-6 mt-6">
          <div className="glass rounded-xl p-5">
            <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Problem</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Solution</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Workflow Animation */}
        {project.flow && <WorkflowAnimation flow={project.flow} />}

        {/* Features as interactive cards */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Cpu size={14} className="text-accent-blue" />
            Key Features
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features.map((f, i) => {
              const FeatureIcon = featureIcons[i % featureIcons.length];
              return <FeatureCard key={f} feature={f} icon={FeatureIcon} index={i} />;
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Server size={14} className="text-accent-blue" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="skill-pill text-xs">{t}</span>
            ))}
          </div>
        </div>

        {/* My Role */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">My Role</h4>
          <p className="text-sm text-slate-400">{project.role}</p>
        </div>

        {/* Contribution & What I Learned */}
        <ContributionSection />
        <WhatILearned />

        {/* Live Project Button */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <ExternalLink size={16} />
              View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function PersonalProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className="glass-card p-6 sm:p-8 reveal hover:border-accent-amber/30 transition-all duration-500 relative overflow-hidden group">
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.accent} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-700`} />

      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono text-accent-amber uppercase tracking-widest">Personal Project</span>
          <span className="px-2 py-0.5 rounded-full text-xs bg-accent-amber/15 text-accent-amber border border-accent-amber/20">
            {project.category}
          </span>
        </div>

        <div className="flex items-start gap-4 mb-6">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${project.accent} shrink-0`}>
            <Icon size={28} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
            <p className="text-accent-amber text-sm font-medium">{project.tagline}</p>
          </div>
        </div>

        <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">{project.description}</p>

        {/* Problem / Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="glass rounded-xl p-5">
            <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Problem</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="glass rounded-xl p-5">
            <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">Solution</h4>
            <p className="text-sm text-slate-400 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Workflow Animation */}
        {project.flow && <WorkflowAnimation flow={project.flow} />}

        {/* Features as interactive cards */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Cpu size={14} className="text-accent-amber" />
            Key Features
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.features.map((f, i) => {
              const FeatureIcon = featureIcons[i % featureIcons.length];
              return <FeatureCard key={f} feature={f} icon={FeatureIcon} index={i} />;
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Server size={14} className="text-accent-amber" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="skill-pill text-xs">{t}</span>
            ))}
          </div>
        </div>

        {/* My Role */}
        <div className="mt-6">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">My Role</h4>
          <p className="text-sm text-slate-400">{project.role}</p>
        </div>

        {/* Live Project Button */}
        <div className="flex flex-wrap gap-3 mt-8">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              <ExternalLink size={16} />
              View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const personal = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative section-pad">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-amber/5 rounded-full blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">04 — Projects</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle mx-auto">
            A showcase of my practical skills, problem-solving approach and ability to apply what I've learned.
          </p>
        </div>

        <div className="space-y-6">
          {featured.map((p) => (
            <FeaturedProject key={p.name} project={p} />
          ))}
        </div>

        {personal.length > 0 && (
          <>
            <div className="text-center mt-20 mb-12 reveal">
              <span className="inline-block text-xs font-mono text-accent-amber uppercase tracking-widest mb-3">Personal Project</span>
              <h3 className="section-title text-2xl sm:text-3xl">Beyond the <span className="gradient-text">Capstone</span></h3>
              <p className="section-subtitle mx-auto">
                Side projects where I explore ideas, sharpen my skills and put proactive IT support into practice.
              </p>
            </div>
            <div className="space-y-6">
              {personal.map((p) => (
                <PersonalProjectCard key={p.name} project={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
