import { Button } from "@/components/ui/button";
import { Activity, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center border border-primary/30">
              <Activity className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold">Flow-Monitor</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Arquitectura
            </a>
            <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Documentación
            </a>
          </nav>
          
          {/* CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-sm">
              Iniciar Sesión
            </Button>
            <Button variant="technical" size="technical-sm">
              Solicitar Demo
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Características
              </a>
              <a href="#architecture" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Arquitectura
              </a>
              <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </a>
              <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Documentación
              </a>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Iniciar Sesión
                </Button>
                <Button variant="technical" size="technical-sm">
                  Solicitar Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
