import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden pt-17"> {/* Added pt-20 to push content down */}
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-12"> {/* Added pt-12 for extra breathing room */}
        <div className="flex flex-col items-center text-center text-white">
          
          {/* Lowered the Charity Badge and gave it more margin-bottom */}
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
          
{/* Updated Button Container: Equal width and perfect spacing */}
<div className="flex w-full flex-col justify-center gap-4 px-4 sm:flex-row sm:gap-6 sm:px-0">
  <Link 
    href="/donate" 
    className="inline-flex flex-1 items-center justify-center rounded-xl bg-[#00966b] px-10 py-4 text-lg font-semibold shadow-lg transition-all hover:bg-[#007a57] active:scale-95 sm:min-w-[220px] sm:flex-none"
  >
    Donate Now
  </Link>
  <Link 
    href="/projects" 
    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold backdrop-blur-md transition-all hover:bg-white/20 active:scale-95 sm:min-w-[220px] sm:flex-none"
  >
    View Projects
  </Link>
</div>
        </div>
      </div>
    </section>
  );
}