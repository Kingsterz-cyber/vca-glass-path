import { Target, Eye, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const regions = [
    {
      name: "Rusumo Border",
      description: "Strategic border crossing between Rwanda and Tanzania, facilitating trade and cargo movement.",
    },
    {
      name: "Kigali Operations",
      description: "Central hub for customs coordination and cargo management in Rwanda's capital.",
    },
    {
      name: "Bukavu-Kamembe",
      description: "Connecting DR Congo and Rwanda with efficient border clearing and transport services.",
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
              About <span className="gradient-text">Victory Clearing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner for seamless customs clearing and cargo transport across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card animate-slide-up">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional customs clearing and cargo transport services that exceed our customers' 
                expectations. We are committed to making international trade seamless, efficient, and stress-free 
                for businesses across East Africa.
              </p>
            </div>
            
            <div className="glass-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Eye className="h-12 w-12 text-secondary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and innovative logistics partner in East Africa, known for our 
                reliability, transparency, and customer-first approach. We envision a future where cross-border 
                trade is effortless for all our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regions We Serve */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Regions We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic presence across key border crossings and commercial hubs in East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="glass-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{region.name}</h3>
                <p className="text-muted-foreground text-sm">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-4 mb-12">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Reliability</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent, dependable service you can count on
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-secondary">Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  Clear communication and honest dealings always
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Striving for perfection in every interaction
                </p>
              </div>
            </div>
            <p className="mt-8 text-lg italic text-muted-foreground">
              Dear customers, we depend on you — Your satisfaction is our passion 🤳
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;