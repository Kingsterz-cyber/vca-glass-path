import { Shield, Truck, FileCheck, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import customsClearanceImg from "@/assets/customs-clearance.jpeg";
import cargoTruckImg from "@/assets/cargo-truck.jpeg";
import truckFleetImg from "@/assets/truck-fleet.jpeg";
import advisoryImg from "@/assets/advisory.jpeg";
import borderTransportImg from "@/assets/border-transport.jpeg";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Customs Clearance",
      description: "Expert handling of all customs documentation, duty calculations, and compliance requirements across Rusumo, Kigali, and Bukavu-Kamembe borders.",
      image: customsClearanceImg,
      features: [
        "Import & Export Clearance",
        "Duty & Tax Calculation",
        "Documentation Management",
        "Compliance Verification",
      ],
    },
    {
      icon: Truck,
      title: "Cargo Transport",
      description: "Reliable and secure transportation of goods across East Africa with real-time tracking and full insurance coverage.",
      image: cargoTruckImg,
      features: [
        "Cross-Border Transport",
        "Full Insurance Coverage",
        "Temperature-Controlled Options",
        "Express & Standard Services",
      ],
    },
    {
      icon: FileCheck,
      title: "Tax & Duty Tracking",
      description: "Transparent tracking of all customs taxes, duties, and fees with detailed breakdowns and payment assistance.",
      image: truckFleetImg,
      features: [
        "Real-Time Tax Updates",
        "Detailed Fee Breakdown",
        "Payment Processing",
        "Receipt Management",
      ],
    },
    {
      icon: Users,
      title: "Border Coordination",
      description: "Seamless coordination with border authorities and customs officials for faster processing and clearance.",
      image: borderTransportImg,
      features: [
        "Authority Liaison",
        "Fast-Track Processing",
        "Compliance Support",
        "Documentation Assistance",
      ],
    },
    {
      icon: MessageSquare,
      title: "Advisory Services",
      description: "Expert consultation on trade regulations, import/export requirements, and logistics optimization.",
      image: advisoryImg,
      features: [
        "Regulatory Guidance",
        "Trade Compliance",
        "Route Optimization",
        "Cost Reduction Strategies",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive customs clearing and logistics solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card overflow-hidden animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <service.icon className="h-12 w-12 text-white drop-shadow-lg" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase text-primary tracking-wide">Key Features</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-foreground/80">
                          <span className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 mb-16">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto text-center space-y-6 p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-4xl md:text-5xl font-bold">
              Need a <span className="gradient-accent">Custom Solution?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help with tailored logistics services that fit your unique requirements
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
