import { Monitor, Bell, Settings, CreditCard } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Dashboard IoT Remoto",
    description: "Monitoreo centralizado para múltiples sectores industriales. Visualización en tiempo real desde cualquier dispositivo.",
    tag: "CORE"
  },
  {
    icon: Bell,
    title: "Telemetría Inteligente",
    description: "Alertas automáticas basadas en umbrales configurables. Notificaciones por email, SMS o webhooks.",
    tag: "ALERTAS"
  },
  {
    icon: Settings,
    title: "Soluciones a Medida",
    description: "Implementación personalizada adaptada a tu infraestructura existente. Integración con hardware legacy.",
    tag: "CUSTOM"
  },
  {
    icon: CreditCard,
    title: "Suscripción Flexible",
    description: "Planes mensuales sin inversión en hardware. Escala según la cantidad de dispositivos o KPIs monitoreados.",
    tag: "SAAS"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Soluciones Integrales de Monitoreo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde la captura de datos hasta la toma de decisiones. 
            Una plataforma completa para digitalizar tus operaciones industriales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-technical p-6 relative group hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4">
                <span className="font-mono text-[10px] text-muted-foreground/60 tracking-wider">
                  {service.tag}
                </span>
              </div>
              
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20 mb-4">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
