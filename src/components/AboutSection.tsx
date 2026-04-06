import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShieldCheck, Globe } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative mt-20 border-t border-gray-50 bg-white pt-24 pb-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top Section: Hero Visuals */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start space-y-8 text-left">
            <h2 className="text-5xl leading-[1.1] font-bold tracking-tight text-[#1a1a1a] md:text-6xl">
              Restoring Hope for <br /> Bangladesh’s Most Vulnerable
            </h2>
            
            <p className="max-w-xl text-xl leading-relaxed text-gray-600">
              The MN Foundation is dedicated to transforming lives through unwavering 
              compassion and direct action. We stand as a bridge for those navigating 
              the hardships of poverty and displacement, ensuring that every individual 
              has the opportunity to live with safety, health, and dignity.
            </p>
            
            <Link 
              href="/contact" 
              className="inline-block rounded-full bg-emerald-600 px-10 py-4 text-center text-lg font-bold text-white shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-700"
            >
              Join Our Mission
            </Link>
          </div>

          {/* Right Side: Visual Image Box */}
          <div className="relative h-[450px] w-full overflow-hidden rounded-[3rem] bg-[#0a0a0a] shadow-2xl lg:ml-auto">
             <Image
                src="/second-picture.jpg" 
                alt="Community impact in Bangladesh"
                fill
                className="object-cover opacity-60"
              />
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/80" />
             <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <p className="text-xl leading-relaxed font-medium text-emerald-400 italic opacity-90">
                  "True charity is not just about giving; it is about recognizing 
                  the humanity in others and changing a life forever."
                </p>
             </div>
          </div>
        </div>

        {/* --- Bottom Section: Detailed Mission --- */}
        <div className="mt-24 lg:mt-32">
          <div className="mb-16 text-center lg:text-left">
            <h3 className="mb-6 text-3xl font-bold text-slate-900 underline decoration-emerald-500 decoration-4 underline-offset-8 md:text-4xl">
              A Legacy of Trust & Transparency
            </h3>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              Our work is guided by a commitment to reaching the "last mile"—serving 
              families in the most remote corners of Bangladesh. By prioritizing local 
              knowledge and efficient delivery, we ensure that your generosity creates 
              immediate and lasting change.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Direct Support */}
            <div className="group rounded-[2rem] bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <Heart size={28} />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">Immediate Humanitarian Aid</h4>
              <p className="leading-relaxed text-slate-600">
                From emergency medical interventions to providing secure, climate-resilient 
                shelters, we provide a rapid response to the essential needs of families 
                facing crisis and natural disasters.
              </p>
            </div>

            {/* 100% Donation */}
            <div className="group rounded-[2rem] bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <ShieldCheck size={28} />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">Unwavering Integrity</h4>
              <p className="leading-relaxed text-slate-600">
                Integrity is the heartbeat of our foundation. We maintain a strict 100% 
                donation policy, ensuring that every penny contributed is directed 
                straight to the field where it is needed most.
              </p>
            </div>

            {/* Global/Sustainable */}
            <div className="group rounded-[2rem] bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition-colors group-hover:bg-amber-600 group-hover:text-white">
                <Globe size={28} />
              </div>
              <h4 className="mb-4 text-xl font-bold text-slate-900">Sustainable Empowerment</h4>
              <p className="leading-relaxed text-slate-600">
                We believe in independence over dependency. By investing in agricultural 
                tools, vocational training, and local entrepreneurship, we empower 
                communities to build their own path out of poverty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}