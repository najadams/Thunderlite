import "./App.css";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MenuHighlights } from "./components/MenuHighlights";
import { ServicesSection } from "./components/ServicesSection";
import { SuccessShowcase } from "./components/SuccessShowcase";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-body bg-white-neutral">
      <Header />
      <main>
        <HeroSection />
        <MenuHighlights />
        <ServicesSection />
        <SuccessShowcase />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}