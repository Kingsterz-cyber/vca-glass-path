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
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive customs clearing and logistics solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm uppercase text-primary mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
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
      <section className="py-12 px-4 mb-12">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto text-center space-y-6 p-12">
            <h2 className="text-4xl font-bold">Need a Custom Solution?</h2>
            <p className="text-lg text-muted-foreground">
              We're here to help with tailored logistics services that fit your unique requirements
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
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