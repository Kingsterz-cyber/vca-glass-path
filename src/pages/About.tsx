import { Target, Eye, MapPin, Award, TrendingUp, Heart } from "lucide-react";
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

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service in every interaction",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our passion and drives everything we do",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging technology and expertise to improve logistics efficiency",
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
              About <span className="gradient-text">Victory Clearing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted partner for seamless customs clearing and cargo transport across East Africa
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="glass-card p-8 animate-slide-up">
              <Target className="h-14 w-14 text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To provide exceptional customs clearing and cargo transport services that exceed our customers' 
                expectations. We are committed to making international trade seamless, efficient, and stress-free 
                for businesses across East Africa.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <Eye className="h-14 w-14 text-accent mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become the most trusted and innovative logistics partner in East Africa, known for our 
                reliability, transparency, and customer-first approach. We envision a future where cross-border 
                trade is effortless for all our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              The principles that guide every decision and interaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-8 text-center animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions We Serve */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">
              Regions We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Strategic presence across key border crossings and commercial hubs in East Africa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={region.name}
                className="glass-card p-8 text-center animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
                <h3 className="text-2xl font-semibold mb-3">{region.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-16 px-4 mb-16">
        <div className="container mx-auto">
          <div className="glass-card max-w-4xl mx-auto p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Satisfaction is <span className="gradient-accent">Our Passion</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              At Victory Clearing Agency, we don't just move cargo—we build lasting relationships based on trust, 
              reliability, and exceptional service. Your success is our success, and we're here to support your 
              business every step of the way.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;