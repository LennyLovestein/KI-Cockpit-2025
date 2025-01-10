import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  links?: Array<{
    href: string;
    label: string;
  }>;
}

const Navbar = ({
  links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/changelog", label: "Changelog" },
  ],
}: NavbarProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1)
      const scrolled = window.scrollY;
      const maxScroll = 100; // Threshold for max transparency
      const progress = Math.min(scrolled / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styles based on scroll progress
  const headerStyle = {
    backgroundColor: `rgba(255, 255, 255, ${0.3 + scrollProgress * 0.6})`,
    backdropFilter: `blur(${8 + scrollProgress * 4}px)`,
    borderColor: `rgba(255, 255, 255, ${0.2 + scrollProgress * 0.3})`,
    boxShadow:
      scrollProgress > 0
        ? `0 8px 32px rgba(0, 0, 0, ${0.04 + scrollProgress * 0.04})`
        : "none",
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full border`}
      style={headerStyle}
    >
      <nav className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative text-xl font-bold bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:text-primary group ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {hoveredLink === link.href && (
                  <span className="absolute inset-0 rounded-full bg-primary/5 animate-fade-in-fast" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="relative overflow-hidden rounded-full hover:bg-transparent hover:text-primary transition-colors duration-300 text-sm font-medium group"
            >
              <span className="relative z-10">Sign In</span>
              <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button
              className={`relative overflow-hidden rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-primary/90 to-primary group hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] hover:scale-[1.02] ${
                scrollProgress > 0 ? "shadow-sm" : ""
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-full transition-colors overflow-hidden group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="relative z-10">
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground/80" />
              ) : (
                <Menu className="w-5 h-5 text-foreground/80" />
              )}
            </span>
            <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in-fast">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-primary/5 ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2 px-4">
                <Button
                  variant="ghost"
                  className="rounded-full hover:bg-primary/5 text-sm font-medium w-full"
                >
                  Sign In
                </Button>
                <Button
                  className={`rounded-full bg-gradient-to-r from-primary/90 to-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 text-sm font-medium w-full group ${
                    scrollProgress > 0 ? "shadow-sm" : ""
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
