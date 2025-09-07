import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Target, Users, Award, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg to-accent/5" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-accent rounded-full opacity-10 blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary scroll-reveal"
            data-testid="about-title"
          >
            About Hudson Healthcare Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto scroll-reveal">
            Pioneering the future of healthcare technology with innovative solutions that transform patient care and operational excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content Card */}
          <Card className="glass-card border-primary-orange/20 shadow-premium hover-lift scroll-reveal">
            <CardContent className="p-8 sm:p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-primary rounded-xl">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">Our Mission</h3>
                    <p 
                      className="text-text-secondary leading-relaxed"
                      data-testid="about-mission"
                    >
                      Our mission is to revolutionize healthcare delivery and operational efficiency through cutting-edge technology solutions. We specialize in developing and implementing comprehensive software systems that empower healthcare providers to deliver exceptional patient care while optimizing their practice management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-accent rounded-xl">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3">Our Vision</h3>
                    <p 
                      className="text-text-secondary leading-relaxed"
                      data-testid="about-description"
                    >
                      With a deep understanding of the unique challenges facing healthcare organizations, we provide tailored solutions that enhance workflow efficiency, ensure regulatory compliance, and improve patient outcomes across the entire care continuum.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-primary-orange font-semibold text-lg p-4 bg-primary-orange/10 rounded-xl">
                  <MapPin className="mr-3 h-6 w-6" />
                  <span data-testid="address">
                    221 River Street, Suite 9, Hoboken, NJ 07030
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 scroll-reveal">
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <div className="p-3 bg-gradient-primary rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient-primary mb-2">500+</div>
              <div className="text-text-secondary">Healthcare Partners</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <div className="p-3 bg-gradient-accent rounded-full w-fit mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gradient-accent mb-2">15+</div>
              <div className="text-text-secondary">Years Experience</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <div className="p-3 bg-primary-orange rounded-full w-fit mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-orange mb-2">99.9%</div>
              <div className="text-text-secondary">Uptime Guarantee</div>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center hover-lift">
              <div className="p-3 bg-primary-teal rounded-full w-fit mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-teal mb-2">24/7</div>
              <div className="text-text-secondary">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
