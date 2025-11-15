import { Link } from "react-router-dom";
import { Package, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card mt-20 border-t-2 border-primary/10 rounded-none">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Victory Clearing</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for customs clearing and cargo transport across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Customs Clearance</li>
              <li className="text-muted-foreground">Cargo Transport</li>
              <li className="text-muted-foreground">Tax & Duty Tracking</li>
              <li className="text-muted-foreground">Border Coordination</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@victoryclearing.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <span>Rusumo, Kigali, Bukavu-Kamembe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center space-y-2">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Victory Clearing Agency. All rights reserved.</p>
          <p className="text-sm text-primary font-medium italic">Dear customers, we depend on you — Your satisfaction is our passion 🤳</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;