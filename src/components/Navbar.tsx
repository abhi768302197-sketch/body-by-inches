import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onJoinClick: () => void;
}

export default function Navbar({ onNavigate, onJoinClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Why Choose Us", id: "why-choose" },
    { label: "Classes", id: "classes" },
    { label: "Membership", id: "membership" },
    { label: "Fitness Tools", id: "fitness-tools" },
    { label: "Trainers", id: "trainers" },
    { label: "Contact", id: "contact" },
    { label: "FAQs", id: "faqs" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background effect on scroll
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracker
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick("home")}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="bg-[#1A1A1A] text-white p-2.5 rounded-xl group-hover:bg-amber-500 transition-colors duration-300 shadow-sm flex items-center justify-center">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-extrabold text-[20px] tracking-tight text-[#1A1A1A] block leading-tight">
              BODY BY INCHES
            </span>
            <span className="text-[11px] font-mono tracking-widest text-amber-600 block uppercase leading-none font-semibold">
              Sector 21A • Noida
            </span>
          </div>
        </button>

        {/* Desktop Navigation Link Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg cursor-pointer ${
                activeSection === item.id
                  ? "text-[#1A1A1A] bg-gray-100/80 font-semibold"
                  : "text-gray-500 hover:text-[#1A1A1A] hover:bg-gray-50/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Button (Join Now) */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onJoinClick}
            className="bg-[#1A1A1A] text-white text-sm font-semibold px-6 py-2.5 rounded-xl border border-transparent shadow-md hover:bg-amber-500 hover:text-[#1A1A1A] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 ml-1 text-gray-700 hover:text-[#1A1A1A] rounded-xl hover:bg-gray-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-fade-in py-6 px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-4 py-3 text-base font-medium rounded-xl transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "bg-gray-100 text-[#1A1A1A] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1A1A1A]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onJoinClick();
                }}
                className="w-full bg-[#1A1A1A] text-white text-center py-3.5 rounded-xl font-semibold hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
