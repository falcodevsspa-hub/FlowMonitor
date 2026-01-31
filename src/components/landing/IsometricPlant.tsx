export function IsometricPlant() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* SVG Isometric Industrial Plant */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(215, 70%, 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(215, 70%, 35%)" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="darkSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 25%, 18%)" />
            <stop offset="100%" stopColor="hsl(220, 25%, 12%)" />
          </linearGradient>
          <linearGradient id="lightSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(220, 25%, 22%)" />
            <stop offset="100%" stopColor="hsl(220, 25%, 16%)" />
          </linearGradient>
          
          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Base Platform */}
        <path
          d="M200 320 L320 260 L320 270 L200 330 L80 270 L80 260 Z"
          fill="url(#darkSurface)"
          stroke="hsl(215, 70%, 50%)"
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        <path
          d="M200 310 L320 250 L200 190 L80 250 Z"
          fill="url(#lightSurface)"
          stroke="hsl(215, 70%, 50%)"
          strokeWidth="0.5"
          strokeOpacity="0.5"
        />
        
        {/* Main Building - Left */}
        <g>
          <path
            d="M100 240 L100 160 L160 130 L160 210 Z"
            fill="url(#darkSurface)"
            stroke="hsl(215, 70%, 50%)"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <path
            d="M160 130 L220 160 L220 240 L160 210 Z"
            fill="url(#lightSurface)"
            stroke="hsl(215, 70%, 50%)"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <path
            d="M100 160 L160 130 L220 160 L160 190 Z"
            fill="hsl(220, 25%, 25%)"
            stroke="hsl(215, 70%, 50%)"
            strokeWidth="0.5"
            strokeOpacity="0.5"
          />
          
          {/* Window grid */}
          <g stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.6">
            <rect x="110" y="170" width="15" height="20" fill="hsl(215, 70%, 50%)" fillOpacity="0.1" />
            <rect x="130" y="175" width="15" height="20" fill="hsl(215, 70%, 50%)" fillOpacity="0.15" />
            <rect x="110" y="200" width="15" height="20" fill="hsl(215, 70%, 50%)" fillOpacity="0.1" />
            <rect x="130" y="205" width="15" height="20" fill="hsl(215, 70%, 50%)" fillOpacity="0.15" />
          </g>
        </g>
        
        {/* Tank - Center */}
        <g>
          <ellipse cx="200" cy="220" rx="30" ry="15" fill="url(#darkSurface)" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.4" />
          <path
            d="M170 220 L170 150 A30 15 0 0 1 230 150 L230 220"
            fill="url(#lightSurface)"
            stroke="hsl(215, 70%, 50%)"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
          <ellipse cx="200" cy="150" rx="30" ry="15" fill="hsl(220, 25%, 24%)" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.5" />
          
          {/* Tank details */}
          <circle cx="200" cy="180" r="4" fill="hsl(152, 55%, 42%)" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="170" y1="185" x2="230" y2="185" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="170" y1="200" x2="230" y2="200" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.3" />
        </g>
        
        {/* Tower - Right */}
        <g>
          <rect x="260" y="120" width="40" height="120" fill="url(#darkSurface)" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.4" />
          <rect x="268" y="130" width="24" height="8" fill="hsl(215, 70%, 50%)" fillOpacity="0.2" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.5" />
          <rect x="268" y="145" width="24" height="8" fill="hsl(215, 70%, 50%)" fillOpacity="0.15" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.5" />
          <rect x="268" y="160" width="24" height="8" fill="hsl(215, 70%, 50%)" fillOpacity="0.1" stroke="hsl(215, 70%, 50%)" strokeWidth="0.5" strokeOpacity="0.5" />
          
          {/* Warning light */}
          <circle cx="280" cy="110" r="5" fill="hsl(38, 85%, 50%)" filter="url(#glow)">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Pipes */}
        <g stroke="hsl(215, 70%, 50%)" strokeWidth="2" strokeOpacity="0.5" fill="none">
          <path d="M160 200 Q180 200 180 220 L180 250" />
          <path d="M220 200 Q240 200 260 200 L260 180" />
          
          {/* Data flow animation */}
          <circle r="3" fill="hsl(215, 70%, 60%)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M160 200 Q180 200 180 220 L180 250" />
          </circle>
          <circle r="3" fill="hsl(215, 70%, 60%)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M220 200 Q240 200 260 200 L260 180" />
          </circle>
        </g>
        
        {/* Sensor nodes */}
        <g filter="url(#glow)">
          <circle cx="180" cy="250" r="4" fill="hsl(215, 70%, 55%)" />
          <circle cx="260" cy="180" r="4" fill="hsl(152, 55%, 45%)" />
          <circle cx="120" cy="220" r="4" fill="hsl(215, 70%, 55%)" />
        </g>
        
        {/* Connection lines to sensors */}
        <g stroke="hsl(215, 70%, 50%)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4">
          <line x1="180" y1="250" x2="180" y2="280" />
          <line x1="260" y1="180" x2="290" y2="160" />
          <line x1="120" y1="220" x2="90" y2="200" />
        </g>
        
        {/* Data labels */}
        <g className="font-mono" fill="hsl(215, 70%, 60%)" fontSize="8">
          <text x="175" y="295">S-001</text>
          <text x="285" y="155">S-002</text>
          <text x="65" y="195">S-003</text>
        </g>
      </svg>
      
      {/* Floating data cards */}
      <div className="absolute top-8 right-0 bg-card/90 border border-border rounded-sm p-3 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <div className="text-xs text-muted-foreground mb-1">Sensor S-001</div>
        <div className="font-mono text-lg text-success">45.2 L/min</div>
      </div>
      
      <div className="absolute bottom-24 left-0 bg-card/90 border border-border rounded-sm p-3 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="text-xs text-muted-foreground mb-1">Sistema</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="font-mono text-sm text-success">OPERATIVO</span>
        </div>
      </div>
    </div>
  );
}
