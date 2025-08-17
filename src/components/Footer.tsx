import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-violet-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center">
                <span className="text-white font-display text-xl font-bold">V</span>
              </div>
              <span className="font-display text-2xl font-bold text-white">
                Verdant
              </span>
            </div>
            
            <p className="font-body text-white/90 leading-relaxed mb-6 max-w-md">
              Where culinary artistry meets exceptional service. We create unforgettable 
              dining experiences with fresh, locally-sourced ingredients and innovative techniques.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center hover:bg-green-light transition-all transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center hover:bg-green-light transition-all transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green-primary flex items-center justify-center hover:bg-green-light transition-all transform hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#menu" className="font-body text-white/80 hover:text-green-primary transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-white/80 hover:text-green-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="font-body text-white/80 hover:text-green-primary transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-white/80 hover:text-green-primary transition-colors">
                  Private Events
                </a>
              </li>
              <li>
                <a href="#" className="font-body text-white/80 hover:text-green-primary transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-6">
              Contact Info
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-body text-white/90">123 Culinary Lane</p>
                  <p className="font-body text-white/90">Gourmet District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-primary flex-shrink-0" />
                <p className="font-body text-white/90">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-primary flex-shrink-0" />
                <p className="font-body text-white/90">hello@verdantdining.com</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-body text-sm font-medium text-white mb-3">Hours</h4>
              <div className="space-y-1">
                <p className="font-body text-xs text-white/80">Mon-Thu: 5:00 PM - 10:00 PM</p>
                <p className="font-body text-xs text-white/80">Fri-Sat: 5:00 PM - 11:00 PM</p>
                <p className="font-body text-xs text-white/80">Sunday: 4:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Stay in Touch
            </h3>
            <p className="font-body text-white/80 mb-6">
              Subscribe to receive updates about special events, seasonal menus, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-full font-body text-sm bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white/30"
              />
              <button className="px-6 py-3 bg-green-primary text-white font-body text-sm font-medium rounded-r-full hover:bg-green-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-body text-white/70 text-sm">
            © 2024 Verdant Restaurant. All rights reserved. | 
            <a href="#" className="hover:text-green-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-green-primary transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}