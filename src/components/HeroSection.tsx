import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white-neutral bottom-wave-violet">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1718939044138-5b76d9dd938b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGxhdGVkJTIwZ291cm1ldCUyMGRpc2glMjBmaW5lJTIwZGluaW5nfGVufDF8fHx8MTc1NTQyMzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant fine dining dish"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight fade-in-up text-neutral-dark">
          Fresh Taste,<br />
          <span className="italic">Elegant Service</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
          Experience culinary excellence with farm-to-table ingredients, masterful techniques, 
          and personalized service that transforms every meal into an unforgettable journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up fade-in-up-delay-2">
          <Button className="gradient-button-green text-white font-body text-base font-medium px-8 py-3 rounded-full border-0 hover:opacity-90 transition-all transform hover:scale-105">
            Book Experience
          </Button>
          
          <Button variant="outline" className="bg-white/90 backdrop-blur-sm text-gray-700 border-gray-300 font-body text-base font-medium px-8 py-3 rounded-full hover:bg-gray-50 transition-all">
            View Menu
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 fade-in-up fade-in-up-delay-3">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}