'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icons for the hamburger toggle

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Impact', href: '/impact' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-[110]">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
            MN
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${
            isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'
          }`}>
            Foundation
          </span>
        </Link>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center space-x-8 font-medium ${
          isScrolled ? 'text-slate-600' : 'text-white/90'
        }`}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-emerald-500 transition-colors">
              {link.name}
            </Link>
          ))}
          <Link 
            href="/donate" 
            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
              isScrolled ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-900'
            }`}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[110] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-slate-900 w-8 h-8" />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/donate" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-10 py-4 bg-emerald-600 text-white rounded-full text-xl font-bold shadow-lg"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </nav>
  );
}