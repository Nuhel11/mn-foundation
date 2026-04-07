"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isLightPage =
    pathname === "/donate" || pathname === "/about" || pathname === "/contact";

  const showSolid = isScrolled || isLightPage;

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          showSolid
            ? "bg-white/95 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative h-16 w-32 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] md:h-20 md:w-40">
              <Image
  src="/logo.jpeg"
  alt="MN Foundation Logo"
  fill
  sizes="(max-width: 768px) 128px, 160px"
  className="object-contain object-left"
/>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden items-center gap-3 md:flex ${
              showSolid ? "text-slate-700" : "text-white"
            }`}
          >
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-2 ${
                showSolid ? "bg-slate-50" : "bg-white/10 backdrop-blur-md"
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-sm"
                        : showSolid
                        ? "text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
                        : "text-white hover:bg-white/10 hover:text-emerald-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/donate"
              className="ml-3 inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 active:scale-95"
            >
              Donate Now
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative z-[120] rounded-full p-2.5 transition-colors md:hidden ${
              showSolid
                ? "bg-slate-100 text-slate-900"
                : "bg-white/10 text-white backdrop-blur-md"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[110] md:hidden transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />

        {/* Panel */}
        <div
          className={`absolute inset-x-4 top-4 rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl transition-all duration-300 ${
            isOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div className="relative h-14 w-28 overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="MN Foundation Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-slate-100 p-2 text-slate-900"
              aria-label="Close Menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-emerald-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-emerald-600"
            >
              About
            </Link>
            <Link
              href="/#projects"
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-emerald-600"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl px-4 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-emerald-600"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <Link
              href="/donate"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:bg-emerald-500"
            >
              Donate Now
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}