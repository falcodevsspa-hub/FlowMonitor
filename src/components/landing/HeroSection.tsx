import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import { IsometricPlant } from "./IsometricPlant";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs text-primary tracking-widest uppercase">
                Sistema SCADA Industrial
              </span>
              <div className="h-px w-16 bg-primary/50" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Visibilidad total sobre tus{" "}
              <span className="text-primary">procesos críticos</span>.
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Flux-Monitor integra sensores, procesamiento lógico y alertas en tiempo real. 
              Garantiza la continuidad operativa y minimiza las pérdidas por ineficiencia.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="technical" size="technical" className="group">
                Solicitar Demo Técnica
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="technical-outline" size="technical">
                <BookOpen className="w-4 h-4" />
                Ver Arquitectura
              </Button>
            </div>
            
            {/* Stats bar */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <div className="font-mono text-2xl font-semibold text-primary">99.9%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Uptime garantizado</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-semibold text-primary">&lt;50ms</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Latencia de datos</div>
              </div>
              <div>
                <div className="font-mono text-2xl font-semibold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Monitoreo activo</div>
              </div>
            </div>
          </div>
          
          {/* Isometric Visual */}
          <div className="relative hidden lg:block">
            <IsometricPlant />
          </div>
        </div>
      </div>
    </section>
  );
}
