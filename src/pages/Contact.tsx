import { useState, FormEvent } from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    // Allow various phone formats
    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 8;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.fullName.trim()) {
      toast({
        title: "Error",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast({
        title: "Error",
        description: "Please enter a valid phone number",
        variant: "destructive",
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Call the edge function
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          company: formData.company.trim() || undefined,
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
      });

      if (error) {
        throw error;
      }

      // Success!
      toast({
        title: `Thanks, ${formData.fullName}!`,
        description: "We've received your message and will respond within 24 hours.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Couldn't send — please try again or contact info@victoryclearing.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Send Us a <span className="gradient-text">Message</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fill out the form below and we'll respond within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 px-4 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 animate-slide-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
                      Full Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      className="bg-white border-border/50 focus:border-primary"
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white border-border/50 focus:border-primary"
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white border-border/50 focus:border-primary"
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0793412436"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-white border-border/50 focus:border-primary"
                      maxLength={20}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your customs clearing or cargo transport needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="min-h-[150px] bg-white border-border/50 focus:border-primary"
                      maxLength={2000}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                <Mail className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-2">info@victoryclearing.com</p>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </div>

              <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Phone className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-2">+1 (800) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 8am-6pm EAT</p>
              </div>

              <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;