import Image from 'next/image';
import { Heart, Target, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "About Us | MN Foundation - Fighting Poverty in Bangladesh",
  description: "Learn about the MN Foundation's mission to provide shelter, medical aid, and sustainable livelihoods to the most vulnerable communities in Bangladesh.",
};

const stats = [
  { label: 'Families Sheltered', value: '150+' },
  { label: 'Patients Treated', value: '2,000+' },
  { label: 'Children Educated', value: '1,200+' },
  { label: 'Donation Impact', value: '100%' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-40 pb-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/shelter.jpg" 
            alt="Foundation background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Our Story. <br />
            <span className="text-emerald-400">Their Future.</span>
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-slate-300">
            MN Foundation was born from a simple belief: that every human being deserves the dignity of a roof, the safety of healthcare, and the hope of a sustainable future.
          </p>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold tracking-widest text-emerald-600 uppercase">Our Purpose</span>
            <h2 className="mt-4 mb-8 text-4xl font-bold text-slate-900">Empowering Bangladesh, one family at a time.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-fit rounded-2xl bg-emerald-50 p-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Mission</h3>
                  <p className="leading-relaxed text-slate-600">
                    To provide immediate relief and long-term sustainable solutions to poverty-stricken communities through shelter, medical assistance, and educational support.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-fit rounded-2xl bg-blue-50 p-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">Our Vision</h3>
                  <p className="leading-relaxed text-slate-600">
                    A Bangladesh where no child goes hungry, no family is left without a home, and every individual has the tools to earn a dignified livelihood.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image src="/study.jpg" alt="Children learning" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Impact Stats */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="mb-2 text-5xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-sm font-medium tracking-wider text-slate-500 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Trust Us? (SEO Friendly keywords included) */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-slate-900">Why the MN Foundation?</h2>
          <p className="text-slate-600">
            We are a registered UK charity committed to radical transparency and direct impact. We bridge the gap between donors and those in desperate need.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "100% Donation Policy", desc: "Every penny of your donation goes directly to our projects on the ground." },
            { title: "Local Expertise", desc: "Our teams are based in Bangladesh, ensuring we understand the local needs perfectly." },
            { title: "Sustainable Growth", desc: "We don't just provide aid; we provide tools for long-term independence." },
          ].map((item, idx) => (
            <div key={idx} className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm transition-shadow hover:shadow-xl">
              <CheckCircle className="mb-6 h-10 w-10 text-emerald-500" />
              <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Section */}
      {/* 5. CTA Section */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-emerald-600 p-12 text-center text-white md:p-20">
          <div className="relative z-10">
            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">Join us in changing lives.</h2>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Link 
                href="/donate" 
                className="w-full rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-700 transition-all hover:bg-slate-100 md:w-auto"
              >
                Donate Now
              </Link>
              <Link 
                href="/#projects" 
                className="w-full rounded-full border-2 border-white/30 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 md:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}