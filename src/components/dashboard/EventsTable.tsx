import { Badge } from "@/components/ui/badge";

const events = [
  { 
    timestamp: "14:32:15", 
    sensorId: "TMP-003", 
    event: "Valor normalizado", 
    status: "success" 
  },
  { 
    timestamp: "14:28:42", 
    sensorId: "FL-001", 
    event: "Pico detectado", 
    status: "warning" 
  },
  { 
    timestamp: "14:15:08", 
    sensorId: "PRS-007", 
    event: "Calibración completada", 
    status: "info" 
  },
  { 
    timestamp: "13:58:33", 
    sensorId: "TMP-001", 
    event: "Umbral superior alcanzado", 
    status: "warning" 
  },
  { 
    timestamp: "13:45:12", 
    sensorId: "FL-002", 
    event: "Reconexión exitosa", 
    status: "success" 
  },
];

const statusConfig = {
  success: { 
    label: "OK", 
    className: "bg-success/10 text-success border-success/30" 
  },
  warning: { 
    label: "ALERTA", 
    className: "bg-warning/10 text-warning border-warning/30" 
  },
  critical: { 
    label: "CRÍTICO", 
    className: "bg-destructive/10 text-destructive border-destructive/30" 
  },
  info: { 
    label: "INFO", 
    className: "bg-primary/10 text-primary border-primary/30" 
  },
};

export function EventsTable() {
  return (
    <div className="overflow-hidden">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Timestamp</th>
            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Sensor</th>
            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Evento</th>
            <th className="text-right py-2 px-2 font-medium text-muted-foreground">Estado</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => {
            const config = statusConfig[event.status as keyof typeof statusConfig];
            return (
              <tr 
                key={index} 
                className="zebra-row border-b border-border/50 last:border-0 hover:bg-accent/30 transition-colors"
              >
                <td className="py-2 px-2 font-mono text-muted-foreground">{event.timestamp}</td>
                <td className="py-2 px-2 font-mono text-foreground">{event.sensorId}</td>
                <td className="py-2 px-2 text-foreground">{event.event}</td>
                <td className="py-2 px-2 text-right">
                  <Badge variant="outline" className={`font-mono text-[10px] ${config.className}`}>
                    {config.label}
                  </Badge>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <div className="mt-3 pt-2 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span>Mostrando 5 de 1,247 eventos</span>
        <button className="text-primary hover:underline font-medium">Ver todos →</button>
      </div>
    </div>
  );
}
