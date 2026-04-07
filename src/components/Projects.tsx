import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, HeartHandshake } from 'lucide-react';

const projects = [
  {
    id: 'shelter-homes',
    title: 'Shelter',
    description: 'Providing safe homes and protection for vulnerable families in need.',
    image: '/shelter.jpg',
  },
  {
    id: 'livelihood',
    title: 'Empowering Livelihood',
    description: 'Helping families rebuild income and create a more secure future.',
    image: '/livelihood-second.jpg',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Supporting children with learning opportunities, school essentials, and meals.',
    image: '/study.jpg',
  },
  {
    id: 'medical-aid',
    title: 'Health',
    description: 'Giving access to vital healthcare, treatment, and basic medical support.',
    image: '/health.jpg',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-50 py-24 md:py-32"
    >
      {/* Soft background glow */}
      <div className="bg-radial-gradient(circle_at_top,rgba(16,185,129,0.08) bg-transparent_35%) absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <HeartHandshake className="mr-2 h-4 w-4" />
            Our Core Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Change lives through projects that truly matter
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Every project is designed to bring real help to vulnerable communities in
            Bangladesh — from safe shelter and healthcare to education and sustainable
            livelihoods. Your support can make this impact possible.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-emerald-200">
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute top-6 left-6">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 backdrop-blur-sm">
                      Featured Project
                    </span>
                  </div>

                  {/* Title on image */}
                  <div className="absolute right-6 bottom-6 left-6">
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="text-3xl font-bold text-white md:text-4xl">
                        {project.title}
                      </h3>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="inline-flex items-center font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
                      View Project Details
                      <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>

                    <span className="text-sm font-medium text-slate-400">
                      Support this cause
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-slate-600">
            Together, we can bring hope, dignity, and opportunity to more families.
          </p>
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 active:scale-95"
          >
            Donate to Support Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}