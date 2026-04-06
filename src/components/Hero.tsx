import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden pt-17">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroImpact.jpg" 
          alt="MN Foundation Bangladesh Project"
          fill
          className="object-cover brightness-[0.4]"
          priority
          sizes="120vw"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12">
        <div className="flex flex-col items-center text-center text-white">
          
          {/* Charity Badge */}
          <span className="mb-8 inline-block rounded-full border border-emerald-500/30 bg-emerald-600/20 px-4 py-1.5 text-sm font-medium text-emerald-400">
            Charity No: 1215654
          </span>
          
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            Ending Poverty in <span className="text-emerald-500">Bangladesh</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
            We provide shelter, medical aid, and sustainable livelihood to those 
            who need it most. Join us in making a lasting difference today.
          </p>
          
          {/* Single Button Container */}
          <div className="flex w-full justify-center px-4 sm:px-0">
            <Link 
              href="/donate" 
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#00966b] px-12 py-5 text-xl font-bold shadow-2xl shadow-emerald-900/20 transition-all hover:scale-105 hover:bg-[#007a57] active:scale-95 sm:w-auto sm:min-w-[280px]"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}