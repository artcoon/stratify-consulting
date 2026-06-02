import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = ["home", "about", "services", "portfolio", "insights", "contact"];
      const scrollPosition = window.scrollY + 120; // offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "홈", id: "home" },
    { name: "회사 소개", id: "about" },
    { name: "사업 영역", id: "services" },
    { name: "시공 실적", id: "portfolio" },
    { name: "인사이트 랩", id: "insights" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 border-b border-border/60 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center cursor-pointer bg-transparent border-0 p-0"
        >
          <img
            src="/logo.png"
            alt="(주)이에스조경"
            className="h-10 w-10 object-contain shrink-0"
          />
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer py-1 bg-transparent border-0 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Certifications & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary font-semibold">
            <Award className="h-3.5 w-3.5 text-primary" />
            여성기업인증
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs text-secondary-foreground font-semibold">
            <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
            특허 공법 보유
          </div>
          <Button
            onClick={() => scrollToSection("contact")}
            className="btn-gold h-9 text-xs px-4 cursor-pointer"
          >
            무료 진단 및 문의 <ArrowRight className="h-3 w-3" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-300 shadow-lg">
          <div className="container py-6 flex flex-col gap-4 text-left">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block text-base font-bold py-2 transition-colors cursor-pointer text-left bg-transparent border-0 w-full ${
                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
              <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary font-semibold">
                <Award className="h-3.5 w-3.5 text-primary" />
                여성기업인증
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs text-secondary-foreground font-semibold">
                <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
                특허 공법 보유
              </div>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="btn-gold w-full mt-2 cursor-pointer"
            >
              무료 진단 및 문의 <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
