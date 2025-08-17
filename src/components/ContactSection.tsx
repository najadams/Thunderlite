import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Calendar, Clock, Phone, Mail, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white-neutral bottom-wave-green relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 fade-in-up" style={{ color: 'var(--neutral-dark)' }}>
            Reserve Your Experience
          </h2>
          <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up fade-in-up-delay-1">
            Ready to embark on a culinary journey? Book your table or inquire about our services. 
            We can't wait to create an unforgettable experience for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-2xl p-8 fade-in-up fade-in-up-delay-2 relative z-10">
            <h3 className="font-display text-2xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Make a Reservation
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-body text-sm font-medium text-gray-700">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Your first name"
                    className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-body text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Your last name"
                    className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-body text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="font-body text-sm font-medium text-gray-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium text-gray-700">
                    Date
                  </Label>
                  <Input
                    type="date"
                    className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium text-gray-700">
                    Time
                  </Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:border-green-primary focus:ring-1 focus:ring-green-primary font-body text-sm">
                    <option value="">Select time</option>
                    <option value="6:00">6:00 PM</option>
                    <option value="6:30">6:30 PM</option>
                    <option value="7:00">7:00 PM</option>
                    <option value="7:30">7:30 PM</option>
                    <option value="8:00">8:00 PM</option>
                    <option value="8:30">8:30 PM</option>
                    <option value="9:00">9:00 PM</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label className="font-body text-sm font-medium text-gray-700">
                    Party Size
                  </Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:border-green-primary focus:ring-1 focus:ring-green-primary font-body text-sm">
                    <option value="">Guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-sm font-medium text-gray-700">
                  Special Requests
                </Label>
                <Textarea
                  id="message"
                  placeholder="Any dietary restrictions, special occasions, or other requests..."
                  rows={4}
                  className="font-body border-gray-300 bg-white focus:border-green-primary focus:ring-green-primary"
                />
              </div>

              <Button className="w-full bg-violet-primary text-white font-body text-base font-medium py-3 rounded-full border-0 hover:opacity-90 transition-opacity">
                Confirm Reservation
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 fade-in-up fade-in-up-delay-3">
            <Card className="bg-white border-0 shadow-2xl p-6 relative z-10">
              <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-600">Phone</p>
                    <p className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-violet-primary flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-600">Email</p>
                    <p className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>hello@verdantdining.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-gray-600">Location</p>
                    <p className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>123 Culinary Lane<br />Gourmet District, NY 10001</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white border-0 shadow-2xl p-6 relative z-10">
              <h3 className="font-display text-xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                Hours of Operation
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">Monday - Thursday</span>
                  <span className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>5:00 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">Friday - Saturday</span>
                  <span className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>5:00 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-gray-600">Sunday</span>
                  <span className="font-body font-medium" style={{ color: 'var(--neutral-dark)' }}>4:00 PM - 9:00 PM</span>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <p className="font-body text-sm text-gray-600 mb-4">
                For private events and catering inquiries
              </p>
              <Button variant="outline" className="border-2 border-violet-primary text-violet-primary font-body text-sm font-medium px-6 py-2 rounded-full transition-all hover:bg-violet-primary hover:text-white hover:scale-105">
                Contact Events Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}