import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, MapPin, Send, Mail, Clock, Sparkles, Shield, Zap, Heart, Rocket, Lock, Cloud, Users } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual form handling)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message! We will get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Log the message (in a real app, this would be sent to a server)
      console.log('Contact form submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Sorry, there was an error sending your message. Please try again or call us directly at 551-800-3255.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-light-bg" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-10 blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-glass-bg backdrop-blur-glass border border-primary-orange/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary-orange" />
            <span className="text-sm font-medium text-text-primary">Get in Touch</span>
          </div>
          
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary scroll-reveal"
            data-testid="contact-title"
          >
            Get in Touch
          </h2>
          <p 
            className="text-lg sm:text-xl text-text-secondary max-w-4xl mx-auto mb-6 scroll-reveal"
            data-testid="contact-subtitle"
          >
            Ready to transform your healthcare operations? Let's discuss your specific needs and goals.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 opacity-80 scroll-reveal">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-secondary">Innovation First</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center">
                <Rocket className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-secondary">Rapid Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-teal rounded-full flex items-center justify-center">
                <Lock className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-secondary">Secure by Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-purple rounded-full flex items-center justify-center">
                <Cloud className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-secondary">Cloud-Native</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-green rounded-full flex items-center justify-center">
                <Users className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-text-secondary">Provider-Focused</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <Card className="glass-card border-primary-orange/20 shadow-premium hover-lift scroll-reveal">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gradient-primary">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex items-start space-x-4 p-4 bg-primary-orange/10 rounded-xl hover:bg-primary-orange/20 transition-spring">
                <div className="p-2 bg-primary-orange rounded-lg">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-orange mb-2">Phone</h4>
                  <a 
                    href="tel:+15518003255"
                    className="text-text-secondary hover:text-primary-orange transition-spring text-lg font-medium"
                    data-testid="contact-phone"
                  >
                    551-800-3255
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-primary-blue/10 rounded-xl hover:bg-primary-blue/20 transition-spring">
                <div className="p-2 bg-primary-blue rounded-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-blue mb-2">Address</h4>
                  <a 
                    href="https://maps.google.com/?q=221+River+Street,+Suite+9,+Hoboken,+NJ+07030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-primary-blue transition-spring"
                    data-testid="contact-address"
                  >
                    221 River Street, Suite 9<br />
                    Hoboken, NJ 07030
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-primary-teal/10 rounded-xl hover:bg-primary-teal/20 transition-spring">
                <div className="p-2 bg-primary-teal rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-teal mb-2">Email</h4>
                  <a 
                    href="mailto:info@hudsonhealthcare.com"
                    className="text-text-secondary hover:text-primary-teal transition-spring"
                  >
                    info@hudsonhealthcare.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-primary-purple/10 rounded-xl hover:bg-primary-purple/20 transition-spring">
                <div className="p-2 bg-primary-purple rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-purple mb-2">Business Hours</h4>
                  <div className="text-text-secondary">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="glass-card border-primary-orange/20 shadow-premium hover-lift scroll-reveal">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gradient-primary">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" className="text-text-primary font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-slate-200 text-text-primary focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-spring rounded-lg"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-text-primary font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-slate-200 text-text-primary focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-spring rounded-lg"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-text-primary font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 bg-white border-2 border-slate-200 text-text-primary focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/20 transition-spring min-h-[120px] resize-y rounded-lg"
                    data-testid="textarea-message"
                  />
                  <p className="text-sm text-text-muted mt-2">
                    Please do not include personal medical information or PHI in this form.
                  </p>
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:shadow-glow text-white font-semibold py-3 rounded-xl transition-spring hover-lift disabled:transform-none disabled:opacity-60 premium-glow"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
