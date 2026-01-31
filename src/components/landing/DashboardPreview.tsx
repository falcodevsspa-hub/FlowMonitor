import { useState } from "react";
import { 
  LayoutDashboard, 
  Server, 
  Bell, 
  FileText, 
  Settings,
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { FlowChart } from "@/components/dashboard/FlowChart";
import { EventsTable } from "@/components/dashboard/EventsTable";

const navItems = [
  { icon: LayoutDashboard, label: "Resumen", active: true },
  { icon: Server, label: "Dispositivos", active: false },
  { icon: Bell, label: "Alertas", badge: 3, active: false },
  { icon: FileText, label: "Reportes", active: false },
  { icon: Settings, label: "Configuración", active: false },
];

export function DashboardPreview() {
  const [activeNav, setActiveNav] = useState("Resumen");
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            Control Aplicado
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Vista del Operador
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interfaz diseñada para la toma de decisiones rápidas. 
            Alta densidad de información con jerarquía visual clara.
          </p>
        </div>
        
        {/* Dashboard mockup */}
        <div className="card-technical overflow-hidden">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-56 bg-sidebar border-r border-sidebar-border p-4 hidden md:block">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center">
                  <Activity className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">Flow-Monitor</span>
              </div>
              
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveNav(item.label)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm transition-colors ${
                      activeNav === item.label
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <Badge variant="destructive" className="ml-auto text-[10px] h-5 px-1.5">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                ))}
              </nav>
              
              {/* System status */}
              <div className="mt-8 pt-4 border-t border-sidebar-border">
                <div className="text-xs text-muted-foreground mb-2">Estado del Sistema</div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-mono text-success">EN LÍNEA</span>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="flex-1 p-6 bg-background">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Panel de Control</h3>
                  <p className="text-xs text-muted-foreground font-mono">
                    Última actualización: {new Date().toLocaleTimeString('es-ES')}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="font-mono text-xs">
                    Planta: MX-001
                  </Badge>
                </div>
              </div>
              
              {/* Widgets Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {/* Status Widget */}
                <div className="card-technical p-4 status-glow-success">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Estado del Sistema</span>
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <div className="font-mono text-2xl font-semibold text-success">OPERATIVO</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Uptime: <span className="font-mono text-foreground">98.5%</span>
                  </div>
                </div>
                
                {/* Alerts Widget */}
                <div className="card-technical p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Alertas Activas</span>
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-semibold">3</span>
                    <span className="text-xs text-muted-foreground">/ 24h</span>
                  </div>
                  <div className="flex gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-warning" />
                    <span className="w-2 h-2 rounded-full bg-warning" />
                    <span className="w-2 h-2 rounded-full bg-muted" />
                  </div>
                </div>
                
                {/* Efficiency Widget */}
                <div className="card-technical p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Eficiencia</span>
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div className="font-mono text-2xl font-semibold">94.2%</div>
                  <div className="text-xs text-success mt-1">
                    +2.1% vs. semana anterior
                  </div>
                </div>
                
                {/* Devices Widget */}
                <div className="card-technical p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">Dispositivos</span>
                    <Server className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-semibold">127</span>
                    <span className="text-xs text-muted-foreground">activos</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    2 en mantenimiento
                  </div>
                </div>
              </div>
              
              {/* Charts row */}
              <div className="grid lg:grid-cols-2 gap-4">
                {/* Flow Chart */}
                <div className="card-technical p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-semibold">Caudal - Línea Principal</h4>
                      <p className="text-xs text-muted-foreground font-mono">Sensor: FL-001</p>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs bg-success/10 text-success border-success/30">
                      NORMAL
                    </Badge>
                  </div>
                  <FlowChart />
                </div>
                
                {/* Events Table */}
                <div className="card-technical p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-semibold">Últimos Eventos</h4>
                      <p className="text-xs text-muted-foreground">Registro en tiempo real</p>
                    </div>
                  </div>
                  <EventsTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
