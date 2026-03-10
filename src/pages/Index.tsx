import { Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <div className="pt-[30vh] px-6 pb-16">
        <div className="max-w-[550px] mx-auto">
          {/* Status label */}
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Status: Wartungsarbeiten
          </p>

          {/* Headline */}
          <h1 className="font-mono text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground leading-[1.1] mb-8">
            Wir bauen um<span className="inline-block text-accent animate-cursor">█</span>
          </h1>

          {/* Description */}
          <div className="space-y-4 mb-12">
            <p className="text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
              Diese Seite wird gerade grundlegend überarbeitet. Wir arbeiten an einem neuen Auftritt und sind bald mit frischem Inhalt zurück.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed">
              In der Zwischenzeit sind wir weiterhin erreichbar. Bei Fragen oder Anliegen könnt ihr uns jederzeit per E-Mail kontaktieren.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-[2px] bg-accent mb-12" />

          {/* Contact */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
              Kontakt
            </p>
            <a
              href="mailto:info@europahaus.net"
              className="inline-flex items-center gap-3 text-foreground font-mono text-sm hover:text-accent transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              info@europahaus.net
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
