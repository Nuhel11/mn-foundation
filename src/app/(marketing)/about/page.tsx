import Image from 'next/image';
import { Heart, Target, Users, CheckCircle, Globe2, HandHeart } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: "About Us | MN Foundation - Fighting Poverty in Bangladesh",
  description:
    "Learn about MN Foundation's mission to support vulnerable communities in Bangladesh through shelter, healthcare, education, and sustainable development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-40 pb-24 text-white">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/shelter.jpg"
            alt="MN Foundation helping communities in Bangladesh"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-300 backdrop-blur-sm">
              Compassion. Dignity. Lasting Change.
            </span>

            <h1 className="mt-6 text-5xl leading-tight font-bold tracking-tight md:text-7xl">
              About <span className="text-emerald-400">MN Foundation</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              MN Foundation exists to stand beside the most vulnerable communities in Bangladesh.
              We work to restore hope through practical support, compassionate care, and long-term
              solutions that help families rebuild their lives with dignity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Introduction / Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative h-[500px] w-full overflow-hidden rounded-[3rem] shadow-2xl">
            <Image
              src="/study.jpg"
              alt="Children learning with support from MN Foundation"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              A charity built on care, action, and responsibility.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              MN Foundation is a UK-based charity dedicated to helping people facing poverty,
              hardship, and crisis in Bangladesh. Our work is rooted in a simple belief: every
              person deserves safety, opportunity, and the chance to live with dignity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We support communities through meaningful projects that address urgent needs while
              also creating a pathway toward long-term stability. From shelter and healthcare to
              education and community support, our aim is not only to help people survive difficult
              times, but to help them move forward with hope.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Everything we do is guided by compassion, transparency, and a commitment to making a
              real difference where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, Values */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase">
              Our Purpose
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Why we do what we do
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We believe charity should be personal, accountable, and focused on lasting impact.
              That is why our work combines immediate relief with sustainable community support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <div className="mb-6 h-fit w-fit rounded-2xl bg-emerald-50 p-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="leading-relaxed text-slate-600">
                To support vulnerable families and individuals in Bangladesh through shelter,
                healthcare, education, and practical aid that improves lives both now and in the
                future.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <div className="mb-6 h-fit w-fit rounded-2xl bg-blue-50 p-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="leading-relaxed text-slate-600">
                A Bangladesh where every family has access to safety, opportunity, and the support
                needed to build a healthier, more secure, and more dignified future.
              </p>
            </div>

            <div className="rounded-[2.5rem] bg-white p-10 shadow-sm">
              <div className="mb-6 h-fit w-fit rounded-2xl bg-amber-50 p-4">
                <HandHeart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Our Values</h3>
              <p className="leading-relaxed text-slate-600">
                Compassion, honesty, dignity, and responsibility are at the heart of our work. We
                are committed to serving communities with respect and using every contribution with
                care and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What Makes Us Different */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase">
              What Makes Us Different
            </span>
            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Giving that is direct, thoughtful, and meaningful
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We understand that people want to know their support is making a genuine difference.
              That is why we focus on transparency, trusted local understanding, and practical
              projects that respond to real community needs.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-emerald-500" />,
                title: "Transparent and accountable",
                desc: "We are committed to honest communication and responsible use of donations, so supporters can give with confidence.",
              },
              {
                icon: <Users className="h-6 w-6 text-emerald-500" />,
                title: "Community-focused approach",
                desc: "We work with an understanding of local realities and aim to support people in ways that are respectful, relevant, and effective.",
              },
              {
                icon: <Globe2 className="h-6 w-6 text-emerald-500" />,
                title: "Long-term impact",
                desc: "Our goal is not only to respond to immediate hardship, but to help build stronger and more resilient futures.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Commitment Section */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase">
            Our Commitment
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            We are here to serve with compassion and integrity.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Behind every donation is a human story. Behind every project is a family hoping for a
            better tomorrow. At MN Foundation, we never lose sight of that. Our commitment is to
            turn generosity into meaningful action and to continue serving communities with care,
            humility, and purpose.
          </p>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3rem] bg-emerald-600 p-12 text-center text-white md:p-20">
          <div className="relative z-10">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
              Join us in changing lives
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-emerald-50">
              Your support helps us continue delivering hope, relief, and opportunity to the people
              who need it most.
            </p>

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