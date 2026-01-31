import { Droplets, Zap, Sprout, Factory, Leaf } from "lucide-react";

const segments = [
  {
    icon: Droplets,
    name: "Agua",
    description: "Gestión hídrica, caudal, calidad y distribución",
    metrics: ["Caudal L/min", "Presión PSI", "pH", "Turbidez"]
  },
  {
    icon: Zap,
    name: "Energía",
    description: "Consumo eléctrico, eficiencia y demanda máxima",
    metrics: ["kWh", "Factor Potencia", "Demanda Peak", "Voltaje"]
  },
  {
    icon: Sprout,
    name: "Agricultura",
    description: "Riego inteligente, humedad de suelo y clima",
    metrics: ["Humedad %", "Temp. Suelo", "Evapotranspiración", "Lluvia mm"]
  },
  {
    icon: Factory,
    name: "Industria",
    description: "Procesos productivos, OEE y mantenimiento predictivo",
    metrics: ["OEE %", "Ciclos/hr", "Temp. Proceso", "Vibración"]
  },
  {
    icon: Leaf,
    name: "Medio Ambiente",
    description: "Emisiones, calidad del aire y normativa ambiental",
    metrics: ["CO₂ ppm", "PM2.5", "NOx", "Ruido dB"]
  }
];

export function SegmentsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Segmentos
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Adaptable a tu Industria
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plataforma multi-vertical diseñada para capturar las variables críticas 
            de cada sector. Configuración específica por industria.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {segments.map((segment, index) => (
            <div
              key={segment.name}
              className="card-technical p-5 group hover:border-primary/30 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <segment.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-semibold mb-1">{segment.name}</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {segment.description}
              </p>
              
              <div className="border-t border-border pt-3">
                <div className="flex flex-wrap gap-1 justify-center">
                  {segment.metrics.slice(0, 2).map((metric) => (
                    <span 
                      key={metric}
                      className="font-mono text-[10px] px-1.5 py-0.5 bg-secondary/50 rounded text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
