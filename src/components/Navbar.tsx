import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import logoImg from "@/assets/images/logo-navbar.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/turlar", label: "Turlar" },
    { href: "/blog", label: "Blog" },
    { href: "/iletisim", label: "İletişim" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src={logoImg}
              alt="Sponsor Hanım Seyahat Acentası"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href
                      ? "text-primary font-semibold"
                      : "text-foreground/80"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif">
              <Link href="/odeme">Rezervasyon Yap</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t bg-background"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 transition-colors ${location === link.href
                      ? "text-primary"
                      : "text-foreground/80"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-2 font-serif bg-primary">
                <Link href="/odeme" onClick={() => setIsOpen(false)}>
                  Rezervasyon Yap
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
