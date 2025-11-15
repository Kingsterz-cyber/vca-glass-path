import { Link } from "react-router-dom";
import { Package, Shield, Clock, MapPin, ArrowRight, TrendingUp, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import truckFleetImg from "@/assets/truck-fleet.jpeg";

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

  const stats = [
    { icon: TrendingUp, value: "500+", label: "Successful Clearances" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Package, value: "1000+", label: "Shipments Delivered" },
    { icon: CheckCircle2, value: "99%", label: "On-Time Rate" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={truckFleetImg} 
            alt="Victory Clearing Fleet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="container mx-auto relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
              Your Trusted <span className="text-white">Customs Clearing</span> & Cargo Partner
            </h1>
            <p className="text-2xl font-medium drop-shadow-md">
              Dear customers, we depend on you — Your satisfaction is our passion 🤳
            </p>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Seamless customs clearance and reliable cargo transport across Rusumo, Kigali, and Bukavu-Kamembe
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-10 py-6 rounded-xl backdrop-blur-sm"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 -mt-20 relative z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card text-center p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Victory Clearing?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We deliver excellence through expertise, technology, and unwavering commitment to your satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="feature-card-icon" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mb-12">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto text-center space-y-6 p-12 bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Simplify Your <span className="gradient-accent">Logistics?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let us handle your customs clearing and cargo transport needs across East Africa with professionalism and care
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
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