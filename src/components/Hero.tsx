import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroImpact.jpg"
          alt="MN Foundation Bangladesh Project"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-slate-950/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/20 via-slate-900/35 to-slate-950/55" />

      {/* Subtle Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-24 pb-16 md:px-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center text-white">
          {/* Badge */}
          <span className="mb-8 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-emerald-300 backdrop-blur-md">
            Registered UK Charity No: 1215654
          </span>

          {/* Heading */}
          <h1 className="text-5xl leading-tight font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Bringing <span className="text-emerald-400">Hope</span>, <br className="hidden sm:block" />
            Help, and a Future to{" "}
            <span className="text-emerald-400">Bangladesh</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
            MN Foundation supports vulnerable communities through shelter,
            healthcare, education, and sustainable livelihood projects that
            create real and lasting change.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-10 py-4 text-lg font-bold text-white shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 active:scale-95 sm:w-auto"
            >
              Donate Now
            </Link>

            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 active:scale-95 sm:w-auto"
            >
              Learn More
            </Link>
          </div>

          {/* Small trust text */}
          <p className="mt-6 text-sm text-slate-300 md:text-base">
            Supporting vulnerable families with compassion, dignity, and transparency.
          </p>
        </div>
      </div>
    </section>
  );
}