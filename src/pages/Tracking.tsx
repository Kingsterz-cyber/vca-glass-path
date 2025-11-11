import { useState } from "react";
import { Search, Package, MapPin, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  // Mock tracking data (in production, this would come from API)
  const mockTrackingData = {
    trackingNumber: "VC-2025-0001",
    status: "Customs Clearance",
    history: [
      { status: "At Port", timestamp: "2025-11-01T08:00:00Z", location: "Mombasa Port", completed: true },
      { status: "In Transit", timestamp: "2025-11-03T12:00:00Z", location: "On Truck", completed: true },
      { status: "At Border", timestamp: "2025-11-06T09:00:00Z", location: "Rusumo", completed: true },
      { status: "Customs Clearance", timestamp: "2025-11-07T10:00:00Z", location: "Rusumo", completed: true },
      { status: "Released", timestamp: null, location: "Pending", completed: false },
      { status: "Delivered", timestamp: null, location: "Pending", completed: false },
    ],
    taxes: { duty: 1500.0, vat: 300.0, other: 0.0, currency: "USD" },
    eta: "2025-11-12T16:00:00Z",
  };

  const handleTrack = () => {
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Track Your <span className="gradient-text">Shipment</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time updates on your cargo location, customs status, and delivery timeline
            </p>
          </div>
        </div>
      </section>

      {/* Tracking Input */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="glass-card">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g., VC-2025-0001)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleTrack()}
                className="flex-1 bg-background/50 border-white/10"
              />
              <Button
                onClick={handleTrack}
                className="glass border-primary/30 hover:bg-primary hover:text-primary-foreground"
              >
                <Search className="mr-2 h-4 w-4" />
                Track
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Results */}
      {isTracking && (
        <section className="py-8 px-4 mb-12">
          <div className="container mx-auto max-w-4xl">
            {/* Status Overview */}
            <div className="glass-card mb-8 animate-slide-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tracking Number</p>
                  <p className="font-semibold">{mockTrackingData.trackingNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Status</p>
                  <p className="font-semibold text-primary">{mockTrackingData.status}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                  <p className="font-semibold">Nov 12, 2025</p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="glass-card mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-2xl font-bold mb-6">Shipment Timeline</h2>
              <div className="space-y-6">
                {mockTrackingData.history.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="relative">
                      {event.completed ? (
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      ) : (
                        <Clock className="h-8 w-8 text-muted-foreground" />
                      )}
                      {index < mockTrackingData.history.length - 1 && (
                        <div
                          className={`absolute left-4 top-8 w-0.5 h-12 ${
                            event.completed ? "bg-primary/30" : "bg-muted-foreground/20"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>
                        {event.status}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <MapPin className="inline h-3 w-3 mr-1" />
                        {event.location}
                      </p>
                      {event.timestamp && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(event.timestamp).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Taxes & Duties */}
            <div className="glass-card animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">Customs Taxes & Duties</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Customs Duty</span>
                  <span className="font-semibold">${mockTrackingData.taxes.duty.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">VAT</span>
                  <span className="font-semibold">${mockTrackingData.taxes.vat.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Other Fees</span>
                  <span className="font-semibold">${mockTrackingData.taxes.other.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-xl text-primary">
                      ${(mockTrackingData.taxes.duty + mockTrackingData.taxes.vat + mockTrackingData.taxes.other).toFixed(2)} {mockTrackingData.taxes.currency}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Information Card */}
      {!isTracking && (
        <section className="py-12 px-4 mb-12">
          <div className="container mx-auto max-w-2xl">
            <div className="glass-card text-center">
              <Package className="h-16 w-16 text-primary mx-auto mb-4 animate-float" />
              <h2 className="text-2xl font-bold mb-3">How Tracking Works</h2>
              <p className="text-muted-foreground mb-6">
                Enter your tracking number above to view real-time updates on your shipment's location, 
                customs clearance status, and estimated delivery time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Real-Time Updates</h3>
                  <p className="text-muted-foreground">Live tracking of your cargo's journey</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-secondary">Tax Details</h3>
                  <p className="text-muted-foreground">Transparent customs duty information</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Delivery ETA</h3>
                  <p className="text-muted-foreground">Accurate delivery estimates</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Tracking;