export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-accent-blue/40 animate-float-slow" style={{ animationDuration: '12s' }} />
        <div className="absolute top-[30%] right-[10%] w-1.5 h-1.5 rounded-full bg-accent-cyan/40 animate-float-slower" style={{ animationDuration: '15s' }} />
        <div className="absolute top-[60%] left-[8%] w-1 h-1 rounded-full bg-accent-purple/40 animate-float-slow" style={{ animationDuration: '10s' }} />
        <div className="absolute top-[80%] right-[15%] w-2 h-2 rounded-full bg-accent-blue/30 animate-float-slower" style={{ animationDuration: '14s' }} />
        <div className="absolute top-[45%] left-[50%] w-1 h-1 rounded-full bg-accent-cyan/30 animate-float-slow" style={{ animationDuration: '11s' }} />
      </div>

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/[0.03] rounded-full blur-[150px]" />
    </div>
  );
}
