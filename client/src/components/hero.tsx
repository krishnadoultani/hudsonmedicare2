import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Users, TrendingUp, Sparkles, Zap, Shield, Heart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const stats = [
    { number: "500+", label: "Healthcare Providers Served", icon: Users },
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Heart },
    { number: "15+", label: "Years Experience", icon: TrendingUp }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-gradient-accent rounded-full opacity-20 blur-xl" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 bg-primary-orange rounded-full opacity-15 blur-xl" />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center">
        {/* Navigation Menu Card */}
        <div className="absolute top-8 right-8 z-50">
          <div className="bg-white/95 backdrop-blur-sm border border-primary-orange/30 rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <span className="text-slate-700 font-medium text-sm">Know More</span>
              <ArrowRight className="h-3 w-3 text-primary-orange" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-8 w-8 text-slate-600 hover:bg-primary-orange/10 border border-slate-200 rounded-lg transition-spring"
              >
                {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </Button>
            </div>
            
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white/98 backdrop-blur-sm border border-slate-200/60 rounded-xl p-4 shadow-2xl min-w-[200px] z-50">
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
                      className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary-orange hover:bg-slate-100 rounded-lg transition-spring text-sm"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary-orange animate-pulse-glow" />
          <span className="text-sm font-medium text-text-primary">Trusted by 500+ Healthcare Providers</span>
        </div>

        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gradient-primary leading-tight animate-slide-up"
          data-testid="hero-title"
        >
          Smart Software for
          <br />
          <span className="text-gradient-accent">Modern Healthcare</span>
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.2s' }}
          data-testid="hero-subtitle"
        >
          Empowering healthcare providers across the United States with innovative technology solutions that improve patient care and streamline operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={handleScheduleClick}
            variant="outline"
            className="glass-card border-2 border-primary-orange/30 text-text-primary hover:bg-primary-orange hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-spring hover-lift hover:border-primary-orange"
            data-testid="button-secondary-cta"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Call Button - Below Navigation */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={handleCallClick}
            className="gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 rounded-xl text-lg transition-spring hover-lift premium-glow group"
            data-testid="button-primary-cta"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 551-800-3255
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Enhanced Dynamic Stats */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-card rounded-2xl p-8 shadow-premium border border-primary-orange/20 hover-lift">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                {(() => {
                  const IconComponent = stats[currentStat].icon;
                  return <IconComponent className="h-8 w-8 text-primary-orange mr-3 animate-pulse-glow" />;
                })()}
                <div className="text-4xl font-bold text-gradient-primary transition-all duration-500">
                  {stats[currentStat].number}
                </div>
              </div>
              <div className="text-text-secondary font-medium text-lg">
                {stats[currentStat].label}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-8 opacity-60 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary-orange" />
            <span className="text-sm font-medium text-text-secondary">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary-blue" />
            <span className="text-sm font-medium text-text-secondary">99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary-teal" />
            <span className="text-sm font-medium text-text-secondary">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary-purple" />
            <span className="text-sm font-medium text-text-secondary">Innovation Focused</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary-green" />
            <span className="text-sm font-medium text-text-secondary">Patient-Centric</span>
          </div>
        </div>
      </div>
    </section>
  );
}
