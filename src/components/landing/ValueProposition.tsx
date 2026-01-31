import { ShieldCheck, TrendingUp, FileSearch } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Continuidad",
    description: "Detección temprana de fallas para evitar paradas de planta no programadas. Alertas inteligentes basadas en patrones históricos.",
    metric: "-73%",
    metricLabel: "Paradas no planificadas"
  },
  {
    icon: TrendingUp,
    title: "Eficiencia",
    description: "Análisis de consumo de recursos y reducción de merma. Optimización continua basada en datos operativos reales.",
    metric: "+18%",
    metricLabel: "Rendimiento operativo"
  },
  {
    icon: FileSearch,
    title: "Trazabilidad",
    description: "Registro inmutable de cada variable para auditorías y cumplimiento normativo. Historial completo de eventos.",
    metric: "100%",
    metricLabel: "Datos auditables"
  }
];

export function ValueProposition() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Propuesta de Valor
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Ingeniería de Datos aplicada a tu Negocio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transformamos datos industriales en decisiones operativas. 
            Cada métrica está diseñada para impactar directamente en tu línea de producción.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="card-technical p-6 group hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-2xl font-semibold text-primary">
                    {value.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {value.metricLabel}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-success" />
                  Verificado en producción
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
