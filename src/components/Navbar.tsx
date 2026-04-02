"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we need dark text (on Donate page or when scrolled)
  const isLightPage = pathname === '/donate';
  const showSolid = isScrolled || isLightPage;

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      showSolid ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className={`text-2xl font-bold ${showSolid ? 'text-slate-900' : 'text-white'}`}>
          MN <span className="text-emerald-600">Foundation</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 ${showSolid ? 'text-slate-600' : 'text-white'}`}>
          <Link href="/about" className="hover:text-emerald-600 transition-colors font-medium">About</Link>
          <Link href="/#projects" className="hover:text-emerald-600">Projects</Link>
          <Link href="/donate" className="bg-emerald-600 text-white px-6 py-2 rounded-full font-bold">Donate</Link>
        </div>

        {/* Mobile Burger Button - Visible on md:hidden */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={30} className="text-slate-900" />
          ) : (
            <Menu size={30} className={showSolid ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 text-2xl font-bold text-slate-900 md:hidden">
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/donate" onClick={() => setIsOpen(false)} className="bg-emerald-600 text-white px-10 py-4 rounded-full">Donate Now</Link>
          <button onClick={() => setIsOpen(false)} className="text-sm text-slate-400 uppercase tracking-widest">Close</button>
        </div>
      )}
    </nav>
  );
}