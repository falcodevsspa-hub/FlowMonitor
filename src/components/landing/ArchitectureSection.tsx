import { Radio, Cpu, LayoutDashboard, ArrowRight } from "lucide-react";

const layers = [
  {
    id: "acquisition",
    label: "CAPA 1",
    title: "Adquisición",
    icon: Radio,
    description: "Captura agnóstica de variables (Temperatura, Flujo, Presión, Energía)",
    details: ["Protocolos: Modbus, OPC-UA, MQTT", "Muestreo configurable", "Buffer local ante desconexión"]
  },
  {
    id: "logic",
    label: "CAPA 2",
    title: "Lógica",
    icon: Cpu,
    description: "Middleware de procesamiento y reglas de negocio personalizables",
    details: ["Motor de reglas en tiempo real", "Detección de anomalías", "Correlación multi-variable"]
  },
  {
    id: "management",
    label: "CAPA 3",
    title: "Gestión",
    icon: LayoutDashboard,
    description: "Visualización centralizada y toma de decisiones basada en evidencia",
    details: ["Dashboards configurables", "Alertas multicanal", "Reportes automatizados"]
  }
];

export function ArchitectureSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Arquitectura del Sistema
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Flujo de Datos Estructurado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tres capas independientes que garantizan escalabilidad, 
            mantenibilidad y tiempo de respuesta óptimo.
          </p>
        </div>
        
        {/* Architecture flow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50 -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
            {layers.map((layer, index) => (
              <div key={layer.id} className="relative">
                {/* Arrow between cards */}
                {index < layers.length - 1 && (
                  <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-background border border-border rounded-full items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
                
                <div className="card-technical p-6 h-full">
                  {/* Layer badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                      {layer.label}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                      <layer.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{layer.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6">
                    {layer.description}
                  </p>
                  
                  {/* Details */}
                  <div className="space-y-2">
                    {layer.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-muted-foreground font-mono">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical specs bar */}
        <div className="mt-16 card-technical p-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">LATENCIA</div>
              <div className="font-mono text-lg text-primary">&lt;50ms</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">THROUGHPUT</div>
              <div className="font-mono text-lg text-primary">10K msg/s</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">RETENCIÓN</div>
              <div className="font-mono text-lg text-primary">365 días</div>
            </div>
            <div className="w-px bg-border" />
            <div>
              <div className="font-mono text-xs text-muted-foreground mb-1">DISPONIBILIDAD</div>
              <div className="font-mono text-lg text-primary">99.95%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
