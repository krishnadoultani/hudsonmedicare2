import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Menu, X } from "lucide-react";
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

  const handleScheduleClick = () => {
    toast({
      title: "Schedule a Demo",
      description: "Please call us at 551-800-3255 to schedule your personalized demo.",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background architectural elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-96 bg-gradient-to-b from-slate-200/30 to-slate-300/20 rounded-l-3xl transform -skew-x-12"></div>
          <div className="absolute top-32 left-32 w-24 h-80 bg-gradient-to-b from-slate-300/20 to-slate-400/10 rounded-l-2xl transform -skew-x-12"></div>
          <div className="absolute top-40 left-52 w-20 h-72 bg-gradient-to-b from-slate-400/15 to-slate-500/5 rounded-l-xl transform -skew-x-12"></div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute top-16 right-10 w-28 h-88 bg-gradient-to-b from-slate-200/25 to-slate-300/15 rounded-r-3xl transform skew-x-12"></div>
          <div className="absolute top-28 right-32 w-22 h-76 bg-gradient-to-b from-slate-300/15 to-slate-400/8 rounded-r-2xl transform skew-x-12"></div>
          <div className="absolute top-36 right-52 w-18 h-68 bg-gradient-to-b from-slate-400/10 to-slate-500/3 rounded-r-xl transform skew-x-12"></div>
        </div>
      </div>

      {/* Navigation Menu Card */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="text-slate-700 font-medium text-sm">Navigation</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-8 w-8 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </div>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 shadow-xl min-w-[200px]">
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
                <div className="border-t border-slate-200 my-2"></div>
                <button
                  onClick={handleCallClick}
                  className="block w-full text-left px-3 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors text-sm font-medium"
                >
                  Call: 551-800-3255
                </button>
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
          crafted for the
          <br />
          <span className="text-slate-600">healthcare</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed"
          data-testid="hero-subtitle"
        >
          Hudson Healthcare Solutions is a trusted partner that enables healthcare providers to deliver exceptional patient care through innovative technology.
        </p>
        
        {/* Call to Action - Bottom Right */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-white/90 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 shadow-lg">
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
