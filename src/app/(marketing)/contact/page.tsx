import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: "Contact Us | MN Foundation",
  description: "Get in touch with the MN Foundation to volunteer, partner, or ask questions about our projects in Bangladesh.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left Side: Connection Info */}
          <div className="space-y-8">
            <div>
              <h1 className="mb-6 text-5xl font-bold text-slate-900">Get in Touch</h1>
              <p className="text-lg leading-relaxed text-slate-600">
                Have questions about our projects or want to volunteer? We'd love to hear from you. Together, we can make a lasting impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wider text-slate-400 uppercase">Email Us</p>
                  <p className="text-lg font-semibold text-slate-900">info@mnfoundation.uk</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wider text-slate-400 uppercase">Location</p>
                  <p className="text-lg font-semibold text-slate-900">United Kingdom / Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-xl md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-2xl border-none bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
                <div>
                  <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full rounded-2xl border-none bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500" />
                </div>
              </div>
              <div>
                <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">Subject</label>
                <select className="w-full appearance-none rounded-2xl border-none bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="General Inquiry">General Inquiry</option>
  <option value="Volunteering">Volunteering</option>
  <option value="Partnership">Partnership</option>
  <option value="Donation Question">Donation Question</option>
                </select>
              </div>
              <div>
                <label className="mb-2 ml-1 block text-sm font-bold text-slate-700">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full resize-none rounded-2xl border-none bg-slate-50 px-6 py-4 outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-5 font-bold text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-700">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}