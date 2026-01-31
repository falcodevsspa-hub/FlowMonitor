import { Puzzle, Eye, Users, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Puzzle,
    title: "Plataforma Adaptable",
    description: "Arquitectura modular que se ajusta a industrias variadas. Desde agua hasta manufactura, una sola plataforma para todos tus verticales.",
    stat: "5+",
    statLabel: "Industrias"
  },
  {
    icon: Eye,
    title: "Datos en Tiempo Real",
    description: "Automatización y visualización instantánea. Decisiones basadas en información actual, no en reportes del día anterior.",
    stat: "<1s",
    statLabel: "Latencia"
  },
  {
    icon: Users,
    title: "Enfoque Consultivo",
    description: "No solo vendemos software. Trabajamos contigo para digitalizar procesos existentes y maximizar el retorno de inversión.",
    stat: "360°",
    statLabel: "Acompañamiento"
  },
  {
    icon: Wrench,
    title: "IoT sobre Hardware Existente",
    description: "Adaptamos tu infraestructura actual. Sin necesidad de reemplazar equipos, conectamos tus sensores legacy a la nube.",
    stat: "0",
    statLabel: "Hardware nuevo"
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              Por Qué Elegirnos
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
              Más que Software: <br />
              <span className="text-primary">Socio Tecnológico</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Flow-Monitor nace de la experiencia real en plantas industriales. 
              Entendemos que cada operación es única y que la tecnología debe 
              adaptarse al negocio, no al revés.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {reasons.slice(0, 2).map((reason) => (
                <div key={reason.title} className="card-technical p-4">
                  <div className="font-mono text-2xl font-semibold text-primary mb-1">
                    {reason.stat}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {reason.statLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="card-technical p-5 flex gap-4 group hover:border-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
