import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const [currentStat, setCurrentStat] = useState(0);
  const { toast } = useToast();
  
  const stats = [
    { number: "500+", label: "Healthcare Providers Served" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
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
  };

  const handleCallClick = () => {
    window.open('tel:+15518003255', '_self');
  };

  const handleScheduleClick = () => {
    // In a real app, this would open a calendar booking system
    toast({
      title: "Schedule a Demo",
      description: "Please call us at 551-800-3255 to schedule your personalized demo.",
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg to-accent/20" />
      <div className="absolute inset-0 grid-pattern" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-gradient leading-tight"
          data-testid="hero-title"
        >
          Smart Software for Modern Healthcare.
        </h1>
        
        <p 
          className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed"
          data-testid="hero-subtitle"
        >
          Empowering healthcare providers across the United States with innovative technology solutions that improve patient care and streamline operations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleCallClick}
            className="bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-orange hover:shadow-orange-hover transition-smooth hover:-translate-y-1 group"
            data-testid="button-primary-cta"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 551-800-3255
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            onClick={handleScheduleClick}
            variant="outline"
            className="border-2 border-primary-orange text-text-primary hover:bg-primary-orange hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-smooth hover:-translate-y-1 bg-transparent"
            data-testid="button-secondary-cta"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Dynamic Stats */}
        <div className="mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-glow border border-primary-orange/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-orange mb-2 transition-all duration-500">
                {stats[currentStat].number}
              </div>
              <div className="text-text-secondary font-medium">
                {stats[currentStat].label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
