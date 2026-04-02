"use client";

import { useState } from "react";
import Image from 'next/image';
import { Heart, ShieldCheck, Globe } from 'lucide-react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalButton from "@/components/PayPalButton";

const donationOptions = [
  { amount: '10', label: 'Provides a food pack for a family for a week.' },
  { amount: '50', label: 'Contributes towards emergency medical aid.' },
  { amount: '100', label: 'Helps build sustainable shelter for the displaced.' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState("10");
  const [isPaid, setIsPaid] = useState(false);

  const handleSuccess = (details: any) => {
    console.log("Transaction completed by " + details.payer.name.given_name);
    setIsPaid(true);
  };

  if (isPaid) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <div className="mb-6 rounded-full bg-emerald-100 p-6">
          <Heart className="h-12 w-12 text-emerald-600 fill-current" />
        </div>
        <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Thank You!</h2>
        <p className="max-w-md text-lg text-slate-600">
          Your donation of <span className="font-bold text-emerald-600">£{selectedAmount}</span> has been received. 
          You are providing life-changing support to those in need.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-10 font-bold text-emerald-600 hover:underline"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <PayPalScriptProvider 
  options={{ 
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "", 
    currency: "GBP",
    intent: "capture"
  }}
>
      <div className="min-h-screen bg-slate-50 pt-40 pb-20">
        <div className="mx-auto max-w-5xl px-6">
          
          {/* Header Section */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-slate-900 tracking-tight">Make a Difference</h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Your generosity provides life-changing support to the most vulnerable communities in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            
            {/* Left: Trust & Info */}
            <div className="space-y-8">
              <div className="relative h-72 w-full overflow-hidden rounded-[2.5rem] shadow-xl">
                <Image 
                  src="/shelter.jpg" 
                  alt="Donation Impact" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-fit rounded-2xl bg-emerald-100 p-3">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Secure Donation</h3>
                    <p className="text-sm text-slate-600">Your transaction is encrypted and safe via PayPal.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-fit rounded-2xl bg-blue-100 p-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">100% Donation Policy</h3>
                    <p className="text-sm text-slate-600">Every penny goes directly to field projects in Bangladesh.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Donation Form Card */}
            <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-2xl md:p-10">
              <h2 className="mb-6 text-2xl font-bold text-slate-900">Select Amount</h2>
              
              <div className="mb-8 grid grid-cols-3 gap-4">
                {donationOptions.map((opt) => (
                  <button 
                    key={opt.amount}
                    onClick={() => setSelectedAmount(opt.amount)}
                    className={`rounded-2xl border-2 py-4 text-xl font-bold transition-all ${
                      selectedAmount === opt.amount 
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-inner" 
                      : "border-slate-100 text-slate-500 hover:border-emerald-200"
                    }`}
                  >
                    £{opt.amount}
                  </button>
                ))}
              </div>

              <div className="mb-10">
                <label className="ml-1 mb-2 block text-sm font-bold text-slate-700">Payment Method</label>
                <div className="rounded-3xl bg-slate-50 p-6">
                   <PayPalButton amount={selectedAmount} onSuccess={handleSuccess} />
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <div className="h-px flex-1 bg-slate-100"></div>
                <Heart className="h-4 w-4" />
                <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              <p className="mt-6 text-center text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                Registered UK Charity No: 1215654
              </p>
            </div>

          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}