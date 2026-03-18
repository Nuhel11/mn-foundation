"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Add this
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Detect which page we are on

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if we are on the home page. 
  // If we ARE NOT on home, or if we ARE scrolled, show the dark text/white bg.
  const isSolid = pathname !== '/' || isScrolled;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold transition-colors ${
          isSolid ? 'text-slate-900' : 'text-white'
        }`}>
          MN <span className="text-emerald-600">Foundation</span>
        </Link>

        {/* Links */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${
          isSolid ? 'text-slate-600' : 'text-white/90'
        }`}>
          <Link href="/#about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-emerald-600 transition-colors">Projects</Link>
          <Link href="/donate" className={`px-6 py-2 rounded-full transition-all ${
            isSolid 
              ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
              : 'bg-white text-slate-900 hover:bg-emerald-50'
          }`}>
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}