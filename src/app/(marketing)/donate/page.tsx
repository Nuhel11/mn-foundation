import Image from 'next/image';
import { Heart, ShieldCheck, Globe } from 'lucide-react';

const donationOptions = [
  { amount: '10', label: 'Provides a food pack for a family for a week.' },
  { amount: '50', label: 'Contributes towards emergency medical aid.' },
  { amount: '100', label: 'Helps build sustainable shelter for the displaced.' },
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-slate-900">Make a Difference</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Your generosity provides life-changing support to the most vulnerable communities in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          
          {/* Left: Trust & Info */}
          <div className="space-y-8">
            <div className="relative h-64 w-full overflow-hidden rounded-[2rem] shadow-lg">
              <Image 
                src="/shelter.jpg" 
                alt="shelter" 
                fill 
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-fit rounded-full bg-emerald-100 p-3">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Secure Donation</h3>
                  <p className="text-sm text-slate-600">Your transaction is encrypted and safe.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-full bg-blue-100 p-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">100% Donation Policy</h3>
                  <p className="text-sm text-slate-600">Every penny goes directly to those in need.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Donation Form Card */}
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-xl md:p-10">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Select Amount</h2>
            
            <div className="mb-8 grid grid-cols-3 gap-4">
              {donationOptions.map((opt) => (
                <button 
                  key={opt.amount}
                  className="rounded-2xl border-2 border-slate-200 py-4 text-xl font-bold text-slate-700 transition-all hover:border-emerald-500 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500"
                >
                  £{opt.amount}
                </button>
              ))}
            </div>

            <div className="mb-8 space-y-4">
              <label className="ml-1 block text-sm font-bold text-slate-700">Custom Amount</label>
              <div className="relative">
                <span className="absolute top-1/2 left-5 -translate-y-1/2 font-bold text-slate-400">£</span>
                <input 
                  type="number" 
                  placeholder="Enter amount"
                  className="w-full rounded-2xl border-none bg-slate-50 py-4 pr-6 pl-10 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-5 text-lg font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-700">
              <Heart className="h-5 w-5 fill-current" />
              Donate Now
            </button>
            
            <p className="mt-6 text-center text-xs text-slate-400 italic">
              MN Foundation is a registered charity in the UK. No: 1215654
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}