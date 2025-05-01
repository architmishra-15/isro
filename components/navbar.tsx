"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Motion, Spring } from "@/components/ui/motion";
import Image from "next/image";
import { Rocket, Menu, X, Globe, Users, Images, Home, FileText, Send } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: Users },
    { href: "/missions", label: "Missions", icon: Rocket },
    { href: "/satellites", label: "Satellites", icon: Globe },
    { href: "/gallery", label: "Gallery", icon: Images },
    { href: "/resources", label: "Resources", icon: FileText },
    { href: "/contact", label: "Contact", icon: Send },
  ];

  return (
    <header className="fixed top-0 w-full z-40 bg-gradient-to-b from-black via-black/80 to-transparent">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-white hover:opacity-90 transition-opacity mt-8"
          >
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" alt="ISRO Logo" width={80} height={80} />
            <span className="text-2xl font-bold tracking-wider">ISRO</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {routes.map((route) => {
              const Icon = route.icon;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="group relative flex items-center text-sm font-medium text-slate-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <Icon className="h-4 w-4" />
                    {route.label}
                  </span>
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-500 transition-all group-hover:w-full" />
                </Link>
              );
            })}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-black/95 md:hidden transition-transform duration-300 ease-in-out backdrop-blur-lg",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 space-y-8 p-8">
          {routes.map((route, index) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.href}
                href={route.href}
                className="flex items-center justify-center text-xl font-medium text-white hover:text-blue-400 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="mr-2 h-5 w-5" />
                {route.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}