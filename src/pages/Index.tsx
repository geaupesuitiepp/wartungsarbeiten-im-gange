const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <div className="pt-[30vh] px-6">
        <div className="max-w-[550px] mx-auto">
          <h1 className="font-mono text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground leading-tight mb-8">
            Wir bauen um<span className="inline-block text-accent animate-cursor">█</span>
          </h1>

          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
            Diese Seite wird gerade grundlegend überarbeitet. Wir arbeiten an etwas Neuem und sind in Kürze zurück.
          </p>

          <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
            Wartungsarbeiten
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
