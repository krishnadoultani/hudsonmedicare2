import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  Calendar, 
  Video, 
  Users, 
  DollarSign, 
  Brain,
  ArrowRight,
  Sparkles
} from "lucide-react";

const solutions = [
  {
    title: "Electronic Health Record (EHR) Systems",
    description: "Comprehensive digital patient records that streamline clinical workflows and improve care coordination across your entire healthcare network.",
    icon: FileText,
    color: "primary-orange"
  },
  {
    title: "Practice Management Software", 
    description: "Integrated solutions for scheduling, billing, and administrative tasks that optimize your practice's operational efficiency and financial performance.",
    icon: Calendar,
    color: "primary-blue"
  },
  {
    title: "Telehealth Platforms",
    description: "Secure, user-friendly virtual care solutions that expand access to healthcare services and improve patient engagement.",
    icon: Video,
    color: "primary-teal"
  },
  {
    title: "Patient Portals & Engagement Tools",
    description: "Interactive platforms that empower patients to actively participate in their healthcare journey and improve communication with providers.",
    icon: Users,
    color: "primary-purple"
  },
  {
    title: "Billing & Revenue Cycle Management",
    description: "Automated billing systems that reduce administrative burden, accelerate reimbursements, and improve financial outcomes.",
    icon: DollarSign,
    color: "primary-green"
  },
  {
    title: "AI-Driven Analytics for Healthcare",
    description: "Advanced analytics and machine learning solutions that provide actionable insights to improve clinical decisions and operational performance.",
    icon: Brain,
    color: "primary-orange"
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-bg to-accent/10" />
      <div className="absolute top-0 left-0 w-full h-full wave-pattern opacity-30" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-primary rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-accent rounded-full opacity-5 blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary-orange" />
            <span className="text-sm font-medium text-text-primary">Our Solutions</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary scroll-reveal"
            data-testid="solutions-title"
          >
            Our Healthcare Solutions
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto scroll-reveal"
            data-testid="solutions-subtitle"
          >
            Comprehensive software solutions designed specifically for modern healthcare environments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index}
                className="glass-card border-primary-orange/20 shadow-premium hover-lift group relative overflow-hidden scroll-reveal premium-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`solution-card-${index}`}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary" />
                
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${solution.color} rounded-xl group-hover:scale-110 transition-spring`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle 
                        className="text-xl font-semibold text-text-primary group-hover:text-primary-orange transition-spring"
                        data-testid={`solution-title-${index}`}
                      >
                        {solution.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p 
                    className="text-text-secondary leading-relaxed mb-4"
                    data-testid={`solution-description-${index}`}
                  >
                    {solution.description}
                  </p>
                  
                  <div className="flex items-center text-primary-orange font-medium group-hover:translate-x-2 transition-spring">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="glass-card p-8 rounded-2xl shadow-premium border border-primary-orange/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">
              Ready to Transform Your Healthcare Practice?
            </h3>
            <p className="text-text-secondary mb-6">
              Discover how our solutions can streamline your operations and improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="gradient-primary hover:shadow-glow text-white font-semibold px-8 py-3 rounded-xl transition-spring hover-lift">
                Schedule Demo
              </button>
              <button className="glass-card border border-primary-orange/30 text-text-primary hover:bg-primary-orange hover:text-white font-semibold px-8 py-3 rounded-xl transition-spring hover-lift">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
