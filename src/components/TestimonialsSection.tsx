import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Food Enthusiast",
    content: "Absolutely extraordinary! Every dish was a masterpiece, and the service was impeccable. The attention to detail and passion for quality ingredients really shows.",
    rating: 5,
    initials: "SC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Event Planner",
    content: "We hired Verdant for our corporate event and they exceeded all expectations. The catering was flawless, and our guests are still talking about the incredible food.",
    rating: 5,
    initials: "MR"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Culinary Student",
    content: "The cooking classes are phenomenal! I learned so much and the chefs are incredibly knowledgeable. It's transformed how I approach cooking at home.",
    rating: 5,
    initials: "ET"
  },
  {
    id: 4,
    name: "David Park",
    role: "Fine Dining Connoisseur",
    content: "This is easily one of the best dining experiences I've had. The seasonal menu showcases incredible creativity while honoring classic techniques. Simply outstanding.",
    rating: 5,
    initials: "DP"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white-neutral bottom-wave-violet relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up" style={{ color: 'var(--neutral-dark)' }}>
            What Our Guests Say
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
            Don't just take our word for it. Here's what our valued guests 
            have to say about their experiences with Verdant.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 p-8 md:p-12 relative overflow-hidden fade-in-up fade-in-up-delay-2 relative z-10">
            {/* Decorative subtle violet accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-violet-primary"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-green-primary" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-center">
                <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{currentTestimonial.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="font-display text-lg font-semibold bg-violet-light text-violet-dark">
                    {currentTestimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-display text-lg font-bold" style={{ color: 'var(--neutral-dark)' }}>
                    {currentTestimonial.name}
                  </p>
                  <p className="font-body text-sm text-gray-600">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6 mt-8 fade-in-up fade-in-up-delay-3">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all transform hover:scale-105 text-violet-primary"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-violet-primary' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all transform hover:scale-105 text-violet-primary"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}