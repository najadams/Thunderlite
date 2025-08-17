import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { ChefHat, Users, GraduationCap } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Private Chef",
    description: "Bring restaurant-quality dining to your home with our experienced private chefs who create personalized menus for your special occasions.",
    icon: ChefHat,
    features: ["Custom menu design", "Premium ingredients", "Professional service", "Special dietary accommodations"]
  },
  {
    id: 2,
    title: "Event Catering",
    description: "Elevate your events with our sophisticated catering services, perfect for corporate gatherings, weddings, and intimate celebrations.",
    icon: Users,
    features: ["Full-service catering", "Event planning support", "Elegant presentation", "Flexible menu options"]
  },
  {
    id: 3,
    title: "Culinary Classes",
    description: "Learn from master chefs in our immersive cooking classes, designed to enhance your culinary skills and creativity in the kitchen.",
    icon: GraduationCap,
    features: ["Expert instruction", "Hands-on experience", "Take-home recipes", "Small group sessions"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white-neutral bottom-wave-violet relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up" style={{ color: 'var(--neutral-dark)' }}>
            Culinary Services
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
            Beyond our restaurant, we offer personalized culinary experiences 
            that bring exceptional dining directly to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
          {services.map((service, index) => (
            <Card key={service.id} className={`bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 fade-in-up fade-in-up-delay-${index + 1}`}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-green-primary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                  {service.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center font-body text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full mr-3 bg-green-primary"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-8 gradient-button-violet text-white font-body text-sm font-medium py-3 rounded-full border-0 hover:opacity-90 transition-opacity">
                Learn More
              </button>
            </Card>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden fade-in-up fade-in-up-delay-3 relative z-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717838206417-c4fe2b9fb043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbCUyMGtpdGNoZW58ZW58MXx8fHwxNzU1MzM2OTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional chef cooking in kitchen"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Elevate Your Dining?
              </h3>
              <p className="font-body text-lg mb-6 max-w-2xl mx-auto">
                Contact us today to discuss how we can create an unforgettable culinary experience for you.
              </p>
              <button className="bg-green-primary text-white font-body text-base font-medium px-8 py-3 rounded-full border-0 hover:opacity-90 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}