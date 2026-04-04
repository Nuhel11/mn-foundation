"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
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

  const isLightPage = pathname === '/donate' || pathname === '/about' || pathname === '/contact';
  const showSolid = isScrolled || isLightPage;

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      showSolid ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-lg transition-transform group-hover:scale-105">
            <Image 
              src="/logo.jpeg" // Make sure the file name matches exactly what's in /public
              alt="MN Foundation Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-bold leading-none ${showSolid ? 'text-slate-900' : 'text-white'}`}>
              MN <span className="text-emerald-600">Foundation</span>
            </span>
            <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${showSolid ? 'text-slate-400' : 'text-emerald-400/80'}`}>
              Bangladesh Relief
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 ${showSolid ? 'text-slate-600' : 'text-white'}`}>
          <Link href="/about" className="hover:text-emerald-600 transition-colors font-medium">About</Link>
          <Link href="/#projects" className="hover:text-emerald-600 transition-colors font-medium">Projects</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors font-medium">Contact</Link>
          <Link href="/donate" className="bg-emerald-600 text-white px-7 py-2.5 rounded-full font-bold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all active:scale-95">
            Donate
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={32} className="text-slate-900" />
          ) : (
            <Menu size={32} className={showSolid ? "text-slate-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 text-2xl font-bold text-slate-900 md:hidden animate-in fade-in zoom-in duration-300">
          {/* Logo in Mobile Menu */}
          <div className="mb-4">
             <Image src="/logo.jpeg" alt="Logo" width={80} height={80} className="rounded-xl shadow-sm" />
          </div>
          
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link href="/donate" onClick={() => setIsOpen(false)} className="bg-emerald-600 text-white px-12 py-4 rounded-full shadow-lg shadow-emerald-100">
            Donate Now
          </Link>
          <button onClick={() => setIsOpen(false)} className="text-sm text-slate-400 uppercase tracking-[0.3em] mt-4">Close</button>
        </div>
      )}
    </nav>
  );
}