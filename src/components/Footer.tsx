import Link from 'next/link';
import { Mail, MapPin, Phone, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-white">
      {/* Top CTA / Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <HeartHandshake className="mr-2 h-4 w-4" />
              Stay Connected
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Join us in making a lasting difference
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Subscribe to hear about our latest projects, community work, and ways
              you can support vulnerable families in Bangladesh.
            </p>
          </div>

          {/* Right Form */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Your email address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/30 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-6 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-emerald-500 active:scale-[0.99]"
              >
                Subscribe Now
              </button>

              <p className="text-sm leading-relaxed text-slate-400">
                We respect your privacy and only send occasional updates about our work.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">MN Foundation</h3>
              <p className="mt-2 text-sm text-slate-400">
                Registered Charity No: 1215654
              </p>
            </div>

            <p className="max-w-sm leading-relaxed text-slate-300">
              Supporting vulnerable communities in Bangladesh through shelter,
              healthcare, education, and sustainable livelihood projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Projects', href: '/#projects' },
                { label: 'Donate', href: '/donate' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-slate-200 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="mb-5 text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
              Our Work
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Shelter', href: '/projects/shelter-homes' },
                { label: 'Livelihood', href: '/projects/livelihood' },
                { label: 'Education', href: '/projects/education' },
                { label: 'Health', href: '/projects/medical-aid' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-slate-200 transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">
              Contact
            </h4>

            <div className="space-y-4 text-slate-200">
              <a
                href="mailto:info@mnfoundation.co.uk"
                className="flex items-start gap-3 transition-colors hover:text-emerald-400"
              >
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <span>info@mnfoundation.co.uk</span>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <span>United Kingdom</span>
              </div>

              <div className="pt-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Support Our Mission
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MN Foundation. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-emerald-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-emerald-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}