import { LineChart, Line, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: "00:00", value: 45.2 },
  { time: "00:05", value: 46.1 },
  { time: "00:10", value: 44.8 },
  { time: "00:15", value: 45.5 },
  { time: "00:20", value: 47.2 },
  { time: "00:25", value: 46.8 },
  { time: "00:30", value: 45.1 },
  { time: "00:35", value: 44.3 },
  { time: "00:40", value: 45.9 },
  { time: "00:45", value: 46.4 },
  { time: "00:50", value: 45.7 },
  { time: "00:55", value: 46.2 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-sm p-2 shadow-lg">
        <p className="text-xs text-muted-foreground font-mono">{label}</p>
        <p className="text-sm font-mono font-semibold text-primary">
          {payload[0].value.toFixed(1)} L/min
        </p>
      </div>
    );
  }
  return null;
};

export function FlowChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <XAxis 
            dataKey="time" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
            interval="preserveStartEnd"
          />
          <YAxis 
            domain={[40, 52]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsl(215, 15%, 55%)', fontSize: 10, fontFamily: 'IBM Plex Mono' }}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Threshold lines */}
          <ReferenceLine 
            y={50} 
            stroke="hsl(38, 85%, 50%)" 
            strokeDasharray="4 4" 
            strokeOpacity={0.6}
          />
          <ReferenceLine 
            y={42} 
            stroke="hsl(38, 85%, 50%)" 
            strokeDasharray="4 4" 
            strokeOpacity={0.6}
          />
          
          {/* Main data line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="hsl(215, 70%, 55%)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: 'hsl(215, 70%, 55%)', stroke: 'hsl(215, 70%, 70%)', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-primary" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-warning border-dashed" style={{ borderTop: '2px dashed' }} />
            <span>Umbral</span>
          </div>
        </div>
        <span className="font-mono">45.7 L/min</span>
      </div>
    </div>
  );
}
