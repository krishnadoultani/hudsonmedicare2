import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Users, Award, Sparkles, Zap, Heart } from "lucide-react";

const whyReasons = [
  {
    title: "Healthcare-Focused Expertise",
    icon: Users,
    color: "primary-orange",
    points: [
      "Deep understanding of healthcare workflows and challenges",
      "Specialized knowledge of clinical and administrative processes",
      "Proven track record with healthcare organizations",
      "Continuous innovation in healthcare technology"
    ]
  },
  {
    title: "Compliance & Scalability",
    icon: Shield,
    color: "primary-blue",
    points: [
      "Full HIPAA compliance and U.S. regulatory adherence",
      "Scalable solutions for clinics, hospitals, and specialty practices",
      "Enterprise-grade security and data protection",
      "Seamless integration with existing healthcare systems"
    ]
  }
];

const trustIndicators = [
  { icon: Award, label: "FHIR Integration", color: "primary-orange" },
  { icon: Users, label: "Population Health", color: "primary-blue" },
  { icon: Shield, label: "Data Governance", color: "primary-teal" },
  { icon: Zap, label: "Machine Learning", color: "primary-purple" },
  { icon: Heart, label: "Telehealth Ready", color: "primary-green" }
];

export default function WhyHudson() {
  return (
    <section id="why" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg to-accent/5" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-accent rounded-full opacity-10 blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary-orange" />
            <span className="text-sm font-medium text-text-primary">Why Choose Us</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary scroll-reveal"
            data-testid="why-title"
          >
            Why Choose Hudson Healthcare Solutions
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto scroll-reveal"
            data-testid="why-subtitle"
          >
            Trusted expertise and proven solutions for healthcare organizations of all sizes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {whyReasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card 
                key={index}
                className="glass-card border-primary-orange/20 shadow-premium hover-lift scroll-reveal premium-glow"
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`why-card-${index}`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${reason.color} rounded-xl`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle 
                      className="text-2xl font-semibold text-gradient-primary"
                      data-testid={`why-card-title-${index}`}
                    >
                      {reason.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {reason.points.map((point, pointIndex) => (
                      <li 
                        key={pointIndex}
                        className="flex items-start text-text-secondary group"
                        data-testid={`why-point-${index}-${pointIndex}`}
                      >
                        <Check className="h-5 w-5 text-primary-orange mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-spring" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gradient-primary mb-8 scroll-reveal">
            Trusted by Healthcare Organizations Nationwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {trustIndicators.map((indicator, index) => {
              const IconComponent = indicator.icon;
              return (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center hover-lift scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-3 bg-${indicator.color} rounded-full w-fit mx-auto mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-text-secondary">
                    {indicator.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
