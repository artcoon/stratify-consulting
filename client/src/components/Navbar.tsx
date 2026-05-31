/*
 * Design Philosophy: Premium Light Clean (A안 - Leaf Grid)
 * Component: Premium Navigation Header
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "홈", path: "/" },
    { name: "회사 소개", path: "/about" },
    { name: "사업 영역", path: "/services" },
    { name: "시공 실적", path: "/portfolio" },
    { name: "인사이트 랩", path: "/insights" },
  ];

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
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-500 group-hover:rotate-12">
            <span className="font-serif text-lg font-bold text-primary">ES</span>
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-br from-primary to-secondary opacity-0 blur transition-opacity duration-500 group-hover:opacity-20" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              STRATIFY
            </span>
            <span className="text-[9px] tracking-[0.25em] text-primary font-bold uppercase">
              Consulting & Landscape
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location === item.path;
            return (
              <Link key={item.path} href={item.path}>
                <span
                  className={`relative text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer py-1 ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  )}
                </span>
              </Link>
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
          <Link href="/contact">
            <Button className="btn-gold h-9 text-xs px-4 cursor-pointer">
              무료 진단 및 문의 <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
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
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
                  <span
                    className={`block text-base font-bold py-2 transition-colors cursor-pointer ${
                      isActive ? "text-primary pl-2 border-l-2 border-primary" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            <div className="h-px bg-border my-2" />
            <div className="flex flex-wrap gap-2.5">
              <div className="flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary font-semibold">
                <Award className="h-3 w-3 text-primary" />
                여성기업인증
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-xs text-secondary-foreground font-semibold">
                <ShieldCheck className="h-3 w-3 text-secondary" />
                특허 공법 보유
              </div>
            </div>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button className="btn-gold w-full py-2.5 text-sm">
                무료 진단 및 문의 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
