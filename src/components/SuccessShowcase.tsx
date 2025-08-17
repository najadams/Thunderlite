import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import { Play, Star } from "lucide-react";
import { useState } from "react";

const showcaseStats = [
  { number: "500+", label: "Events Catered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "15", label: "Years Experience" },
  { number: "50+", label: "Corporate Partners" }
];

export function SuccessShowcase() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-white-neutral bottom-wave-green relative z-10">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up" style={{ color: 'var(--neutral-dark)' }}>
            Success Stories
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
            From intimate celebrations to grand corporate events, witness the memorable moments 
            we've helped create for our valued clients.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="relative rounded-2xl overflow-hidden mb-16 fade-in-up fade-in-up-delay-2 relative z-10">
          <div className="relative aspect-video">
            {!isVideoPlaying ? (
              <>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581796085954-d5be6daa44d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2F0ZXJpbmclMjBldmVudCUyMHdlZGRpbmclMjBzZXR1cHxlbnwxfHx8fDE3NTU0MjUxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Elegant catering event setup"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all transform hover:scale-110 group"
                  >
                    <Play className="w-8 h-8 text-violet-primary ml-1 group-hover:text-violet-dark transition-colors" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-display text-2xl font-bold mb-2">Our Story in Motion</h3>
                  <p className="font-body text-sm opacity-90">Watch how we bring culinary dreams to life</p>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 border-4 border-green-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="font-body">Loading video showcase...</p>
                  <p className="font-body text-sm mt-2 opacity-75">In a real implementation, this would be a video player</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Success Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 relative z-10">
          {showcaseStats.map((stat, index) => {
            const animationClass = index === 0 ? 'fade-in-up fade-in-up-delay-1' : 
                                  index === 1 ? 'fade-in-up fade-in-up-delay-2' : 
                                  index === 2 ? 'fade-in-up fade-in-up-delay-3' : 
                                  'bounce-in';
            return (
              <Card key={index} className={`bg-white border-0 shadow-lg p-6 text-center hover:shadow-xl transition-shadow ${animationClass}`}>
              <div className="text-3xl md:text-4xl font-display font-bold mb-2" style={{ color: 'var(--green-primary)' }}>
                {stat.number}
              </div>
              <div className="font-body text-sm text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
              </Card>
            );
          })}
        </div>

        {/* Client Testimonial Highlight */}
        <Card className="bg-white border-0 shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-auto fade-in-up fade-in-up-delay-3 relative z-10">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-green-primary" />
            ))}
          </div>
          
          <blockquote className="font-body text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
            "Verdant transformed our corporate retreat into an unforgettable culinary experience. 
            Their attention to detail, creative menu design, and flawless execution exceeded 
            all our expectations. Our team is still talking about it months later!"
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-violet-light flex items-center justify-center">
              <span className="font-display text-lg font-semibold text-violet-dark">JM</span>
            </div>
            <div className="text-left">
              <p className="font-display text-lg font-bold" style={{ color: 'var(--neutral-dark)' }}>
                Jennifer Martinez
              </p>
              <p className="font-body text-sm text-gray-600">
                CEO, TechFlow Solutions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}