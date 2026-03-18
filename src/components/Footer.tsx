import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* --- 1. Join Us Section (Top Half) --- */}
      <div className="px-6 py-24 text-center">
        <h2 className="mb-2 text-5xl font-bold text-slate-900">Join Us</h2>
        <p className="mb-10 text-lg text-slate-500">Stay updated on our work in Bangladesh</p>
        
        <form className="mx-auto max-w-md space-y-4">
          <div className="text-left">
            <label className="mb-2 ml-1 block text-sm font-semibold text-slate-700">Your E-mail</label>
            <input 
              type="text" 
              placeholder="Enter E-mail" 
              className="w-full rounded-xl border border-slate-200 px-6 py-4 transition-all focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
          <button className="rounded-full bg-black px-10 py-3 font-bold text-white transition-all hover:bg-slate-800">
            Send
          </button>
        </form>
      </div>

      {/* --- 2. Dark Footer Section (Bottom Half) --- */}
      <div className="bg-[#4a4a4a] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">MN Foundation</h3>
            <p className="text-sm text-gray-300">Registered charity number : 1215654</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Contact</h4>
            <a href="mailto:info@mnfoundation.co.uk" className="block text-gray-200 transition-colors hover:text-emerald-400">
              info@mnfoundation.co.uk
            </a>
          </div>

          {/* Connect/Small Form */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 uppercase">Connect</h4>
            <div className="space-y-3">
              <p className="text-sm font-semibold">Your E-mail</p>
              <input 
                type="text" 
                placeholder="Enter E-mail" 
                className="w-full rounded-lg bg-white px-4 py-2 text-slate-900 focus:outline-none"
              />
              <button className="rounded-full bg-black px-6 py-2 text-sm font-bold text-white transition-all hover:bg-slate-900">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mx-auto mt-20 max-w-7xl border-t border-gray-600 pt-8 text-xs text-gray-400">
          <p>© 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}