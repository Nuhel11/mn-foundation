import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="relative mt-20 border-t border-gray-50 bg-white pt-24 pb-20 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Left Side: Content */}
          <div className="flex flex-col items-start space-y-8 text-left">
            <h2 className="text-5xl leading-[1.1] font-bold tracking-tight text-[#1a1a1a] md:text-6xl">
              Helping Bangladesh's Needy
            </h2>
            
            <p className="max-w-xl text-xl leading-relaxed text-gray-600">
              MN Foundation works to help those facing poverty and 
              homelessness in Bangladesh with care and hope. Whether it's 
              providing shelters for families, helping a farmers livelihood or 
              treating a vulnerable patient. MN Foundation supports the cause 
              of humanitarian aid.
            </p>
            
            <Link 
              href="/join" 
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-12 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-black hover:text-white"
            >
              Join Us
            </Link>
          </div>

          {/* Right Side: Visual Image Box */}
          <div className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-[#0a0a0a] shadow-2xl lg:ml-auto">
             {/* Actual Image from your first snippet */}
             <Image
                src="/second-picture.jpg" 
                alt="Community impact in Bangladesh"
                fill
                className="object-cover opacity-60" // Lowered opacity to let the black background show through
              />

             {/* Dark Gradient Overlay for that premium look */}
             <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-black/80" />
             
             {/* Centered Quote */}
             <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <p className="text-lg font-medium text-emerald-400 italic opacity-80">
                  "Giving is not just about making a donation. It is about making a difference."
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}