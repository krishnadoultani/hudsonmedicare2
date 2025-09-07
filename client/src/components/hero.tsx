import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Menu, X, Shield, Heart, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  const handleCallClick = () => {
    window.open('tel:+15518003255', '_self');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Enhanced Background architectural elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-[500px] bg-gradient-to-b from-slate-300/40 to-slate-400/25 rounded-l-3xl transform -skew-x-12 shadow-lg"></div>
          <div className="absolute top-32 left-40 w-32 h-[420px] bg-gradient-to-b from-slate-400/35 to-slate-500/20 rounded-l-2xl transform -skew-x-12 shadow-md"></div>
          <div className="absolute top-44 left-64 w-24 h-[360px] bg-gradient-to-b from-slate-500/30 to-slate-600/15 rounded-l-xl transform -skew-x-12 shadow-sm"></div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-16 right-10 w-36 h-[480px] bg-gradient-to-b from-slate-300/35 to-slate-400/20 rounded-r-3xl transform skew-x-12 shadow-lg"></div>
          <div className="absolute top-28 right-40 w-28 h-[400px] bg-gradient-to-b from-slate-400/30 to-slate-500/15 rounded-r-2xl transform skew-x-12 shadow-md"></div>
          <div className="absolute top-36 right-64 w-20 h-[340px] bg-gradient-to-b from-slate-500/25 to-slate-600/10 rounded-r-xl transform skew-x-12 shadow-sm"></div>
        </div>
      </div>

      {/* Enhanced Navigation Menu Card */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="text-slate-700 font-medium text-sm">Know more</span>
            <ArrowRight className="h-3 w-3 text-slate-500" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-8 w-8 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg transition-all"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white/98 backdrop-blur-sm border border-slate-200/60 rounded-xl p-4 shadow-2xl min-w-[200px]">
              <div className="space-y-2">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About', id: 'about' },
                  { label: 'Solutions', id: 'solutions' },
                  { label: 'Why', id: 'why' },
                  { label: 'Contact', id: 'contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-slate-900 leading-tight"
          data-testid="hero-title"
        >
          Crafted for
          <br />
          <span className="text-slate-600">Better Care</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          data-testid="hero-subtitle"
        >
          Hudson Healthcare Solutions is a trusted partner that enables healthcare providers to deliver exceptional patient care through innovative technology.
        </p>

        {/* Additional Taglines */}
        <div className="space-y-6 mb-16">
          <div className="text-lg font-semibold text-slate-700">
            Streamlining Care, End to End
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-slate-500">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>Healthcare-Ready</span>
            </div>
          </div>
        </div>
        
        {/* Call to Action - Bottom Right */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center">
                <Phone className="h-8 w-8 text-slate-600" />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-500 font-medium">get started</div>
                <div className="text-lg font-bold text-slate-900">Call Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
