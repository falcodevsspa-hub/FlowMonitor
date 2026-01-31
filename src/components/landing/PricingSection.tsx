import { Check, Cpu, Brain, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: Cpu,
    price: "2.5",
    unit: "UF/mes",
    perDevice: "por dispositivo",
    description: "Monitoreo básico para operaciones pequeñas",
    features: [
      "Dashboard en tiempo real",
      "Hasta 10 dispositivos",
      "Alertas por email",
      "Historial 30 días",
      "Soporte por ticket"
    ],
    cta: "Comenzar",
    highlight: false
  },
  {
    name: "Profesional",
    icon: Brain,
    price: "4.5",
    unit: "UF/mes",
    perDevice: "por dispositivo",
    description: "Análisis avanzado con inteligencia artificial",
    features: [
      "Todo en Starter +",
      "Dispositivos ilimitados",
      "Alertas IA predictivas",
      "Historial 12 meses",
      "API REST completa",
      "Reportes automatizados",
      "Soporte prioritario"
    ],
    cta: "Solicitar Demo",
    highlight: true
  },
  {
    name: "Enterprise",
    icon: Wrench,
    price: "Custom",
    unit: "",
    perDevice: "reglas a medida",
    description: "Solución personalizada para grandes operaciones",
    features: [
      "Todo en Profesional +",
      "Reglas de negocio custom",
      "Integración ERP/SCADA",
      "On-premise disponible",
      "SLA garantizado",
      "Consultoría dedicada",
      "Capacitación incluida"
    ],
    cta: "Contactar Ventas",
    highlight: false
  }
];

export function PricingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Planes
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Modelo SaaS Escalable
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sin inversión inicial en hardware. Paga solo por lo que monitorizas.
            Suscripción mensual en UF indexada a dispositivos o KPIs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card-technical p-6 relative ${
                plan.highlight 
                  ? "border-primary/50 bg-primary/5" 
                  : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-[10px] px-3 py-1 bg-primary text-primary-foreground rounded-sm tracking-wider">
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                  <plan.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">{plan.perDevice}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-1">
                  <span className="font-mono text-3xl font-semibold">{plan.price}</span>
                  {plan.unit && (
                    <span className="text-sm text-muted-foreground">{plan.unit}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={plan.highlight ? "technical" : "technical-outline"}
                className="w-full"
                size="technical"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-mono text-xs">*</span> Consultoría e integración IoT disponible como servicio adicional.
            <br />
            Adaptamos hardware existente a nuestra plataforma.
          </p>
        </div>
      </div>
    </section>
  );
}
