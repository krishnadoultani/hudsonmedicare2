import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-accent/20" />
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
            onClick={() => scrollToSection('contact')}
            className="bg-primary-orange hover:bg-primary-orange/90 text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-orange hover:shadow-orange-hover transition-smooth hover:-translate-y-1 group"
            data-testid="button-primary-cta"
          >
            <Phone className="mr-2 h-5 w-5" />
            Talk to us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('solutions')}
            variant="outline"
            className="border-2 border-primary-orange text-text-primary hover:bg-primary-orange hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-smooth hover:-translate-y-1 bg-transparent"
            data-testid="button-secondary-cta"
          >
            See our solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
