import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Classes from "./components/Classes";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import GoogleMaps from "./components/GoogleMaps";
import FAQs from "./components/FAQs";
import FitnessTools from "./components/FitnessTools";
import { MessageSquare, Phone, MapPin, Mail, Dumbbell, Instagram, Facebook, Youtube, ShieldCheck, HelpCircle, ArrowUp, ChevronUp } from "lucide-react";

export default function App() {
  const [selectedInquirySubject, setSelectedInquirySubject] = useState<string>("");

  // Handler to navigate smoothly to any section
  const handleNavigation = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Pre-fill contact form on selecting plan
  const handleSelectPlan = (planName: string) => {
    setSelectedInquirySubject(planName);
    handleNavigation("contact");
  };

  // Pre-fill contact form on booking trial details for classes
  const handleBookClass = (className: string) => {
    setSelectedInquirySubject(`Trial Session - ${className}`);
    handleNavigation("contact");
  };

  const handleJoinClick = () => {
    setSelectedInquirySubject("General Membership Plan Choice");
    handleNavigation("membership");
  };

  const handleExploreClick = () => {
    setSelectedInquirySubject("Complimentary 1-Day Trial Pass");
    handleNavigation("contact");
  };

  const handleClearPreFill = () => {
    setSelectedInquirySubject("");
  };

  // Floating scroll up utility
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-amber-500 selection:text-black antialiased">
      {/* Dynamic Header Sticky Navigation Layout */}
      <Navbar onNavigate={handleNavigation} onJoinClick={handleJoinClick} />

      {/* Main content blocks */}
      <main>
        {/* Hero Section */}
        <Hero onJoinClick={handleJoinClick} onExploreClick={handleExploreClick} />

        {/* Why Choose Us component */}
        <Features />

        {/* Classes & Programs section */}
        <Classes onBookClass={handleBookClass} />

        {/* Membership Options comparison plans list */}
        <Membership onSelectPlan={handleSelectPlan} />

        {/* Interactive health and workout calculation tools */}
        <FitnessTools />

        {/* Meet Our Certified Trainers grids */}
        <Trainers />

        {/* Community Reviews & Testimonials with Google Ratings */}
        <Testimonials />

        {/* FAQ Accordion block */}
        <FAQs />

        {/* Contact form interactive wrapper */}
        <ContactSection
          preFilledSubject={selectedInquirySubject}
          onClearPreFill={handleClearPreFill}
        />

        {/* Interactive Google Map Noida Sector 22 address layout */}
        <GoogleMaps />
      </main>

      {/* Footer design - premium dark color backdrop matching Omni AI accents */}
      <footer className="bg-[#1A1A1A] text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Grid LHS: Logo and Description */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-[#1A1A1A] p-2 rounded-lg">
                <Dumbbell className="w-5 h-5 fill-[#1A1A1A]" />
              </div>
              <span className="font-display font-extrabold text-[18px] text-white tracking-tight">
                BODY BY INCHES
              </span>
            </div>
            
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An elite training destination based in Noida, Sector 21A. 
              We offer biomechanically calibrated equipment, expert body transformation mapping, 
              and a custom nutrition platform to support permanent performance goals.
            </p>
            
            <div className="pt-2 text-xs text-amber-500 font-mono flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span>FACILITY IS RUNNING LIVE • SECURE ACCESS</span>
            </div>
          </div>

          {/* Grid Middle Left: Navigation Links mapping */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => handleNavigation("home")}
                  className="hover:text-amber-500 transition-colors text-left font-medium block"
                >
                  Home Floor
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("why-choose")}
                  className="hover:text-amber-500 transition-colors text-left font-medium block"
                >
                  Why Core Choice
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("classes")}
                  className="hover:text-amber-500 transition-colors text-left font-medium block"
                >
                  Focused Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("membership")}
                  className="hover:text-amber-500 transition-colors text-left font-medium block"
                >
                  Pricing Tiers
                </button>
              </li>
            </ul>
          </div>

          {/* Grid Middle Right: Operational Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
              Official Timings
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm leading-relaxed">
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>Mon — Sat</span>
                <span className="text-white">6:00 AM — 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span>Sundays</span>
                <span className="text-rose-500 font-bold uppercase">CLOSED</span>
              </li>
              <li className="flex justify-between">
                <span>Core Frontdesk Support</span>
                <span className="text-white">9:00 AM — 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Grid RHS Area: Contact Shortcuts */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
              Quick Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex gap-2">
                <MapPin className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Road, Block I, Sector 21A, Noida, Uttar Pradesh 201307, India</span>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                <a href="tel:+919990856112" className="hover:text-white transition-colors">
                  +91 99908 56112
                </a>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                <a href="mailto:info@bodybyinches.com" className="hover:text-white transition-colors">
                  info@bodybyinches.com
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800/80 hover:bg-amber-500 hover:text-black p-2.5 rounded-xl transition-colors text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800/80 hover:bg-amber-500 hover:text-black p-2.5 rounded-xl transition-colors text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800/80 hover:bg-amber-500 hover:text-black p-2.5 rounded-xl transition-colors text-white"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800/70 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          <p>© {new Date().getFullYear()} Body By Inches Fitness. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white transition-all text-xs">Privacy Framework</a>
            <a href="#home" className="hover:text-white transition-all text-xs">Terms of Fitness</a>
            <a href="#home" className="hover:text-white transition-all text-xs">Sector 21A Compliance</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Badge widget for quick help */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* Floating WhatsApp Quick-Badge */}
        <a
          href="https://wa.me/919990856112?text=Hello%20Body%20by%20Inches%2C%20I'm%20visiting%20from%20your%20website%20and%20want%20to%20book%20a%20free%20gym%20session."
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-white p-4 rounded-full shadow-[0_8px_30px_rgba(16,185,129,0.3)] duration-300 flex items-center justify-center group relative cursor-pointer"
          aria-label="Connect with our Trainer Team"
        >
          {/* Quick notification count indicator */}
          <span className="absolute -top-1 -right-1 bg-[#1A1A1A] font-mono font-bold text-[9px] px-1.5 py-0.5 rounded-full text-white border border-emerald-400">
            1
          </span>
          <MessageSquare className="w-6 h-6 stroke-[2]" />
          
          {/* Float menu helper tooltip on hover */}
          <span className="absolute right-full mr-3 text-xs bg-[#1A1A1A] text-white py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap font-semibold shadow-sm">
            Chat on WhatsApp
          </span>
        </a>

        {/* Scroll To Top helper button */}
        <button
          onClick={handleScrollToTop}
          className="bg-[#1A1A1A] hover:bg-amber-500 hover:text-black p-3.5 rounded-full text-white border border-gray-800 shadow-md transition-all duration-300 cursor-pointer"
          aria-label="Return to top"
        >
          <ChevronUp className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
