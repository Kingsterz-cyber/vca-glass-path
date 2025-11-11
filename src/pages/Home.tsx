import { Link } from "react-router-dom";
import { Package, Shield, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Customs Expertise",
      description: "Seamless clearing through Rusumo, Kigali, and Bukavu borders with full compliance.",
    },
    {
      icon: Clock,
      title: "Real-Time Tracking",
      description: "Monitor your cargo status, customs taxes, and delivery timeline 24/7.",
    },
    {
      icon: Package,
      title: "Reliable Transport",
      description: "Secure cargo transport across East Africa with full insurance coverage.",
    },
    {
      icon: MapPin,
      title: "Border Coordination",
      description: "Expert coordination at major border crossings for faster clearance.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Your Trusted <span className="gradient-text">Customs Clearing</span> & Cargo Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dear customers, we depend on you — Your satisfaction is our passion 🤳
            </p>
            <p className="text-lg text-muted-foreground/80">
              Seamless customs clearance and reliable cargo transport across Rusumo, Kigali, and Bukavu-Kamembe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="glass border-primary/30 hover:bg-primary hover:text-primary-foreground text-lg px-8">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass text-lg px-8">
                <Link to="/tracking">Track Shipment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Why Choose Victory Clearing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence through expertise, technology, and unwavering commitment to your satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto text-center space-y-6 p-12">
            <h2 className="text-4xl font-bold">Ready to Simplify Your Logistics?</h2>
            <p className="text-lg text-muted-foreground">
              Let us handle your customs clearing and cargo transport needs across East Africa
            </p>
            <Button asChild size="lg" className="glass border-primary/30 hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;