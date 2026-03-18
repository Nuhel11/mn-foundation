import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Shelter',
    description: 'Building safe homes for families.',
    image: '/shelter.jpg', // Placeholder - use your actual image
    href: '/projects/shelter',
  },
  {
    title: 'Empowering livelihood',
    description: "Supporting those who's livelihood have been adversely affected.",
    image: '/livelihood-second.jpg',
    href: '/projects/livelihood',
  },
  {
    title: 'Education',
    description: 'Supporting learning for children and providing school meals.',
    image: '/study.jpg',
    href: '/projects/education',
  },
  {
    title: 'Health',
    description: 'Providing access to basic healthcare services and treatments.',
    image: '/health.jpg',
    href: '/projects/health',
  },
];

export default function Projects() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title centered at the top */}
        <h2 className="mb-16 text-center text-5xl font-bold text-slate-900">
          Projects
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <Link key={index} href={project.href} className="group block">
              <div className="space-y-6">
                
                {/* Image Container with Rounded Corners */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content + Arrow */}
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-500">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* The Arrow Icon from your screenshot */}
                  <div className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight className="h-6 w-6 text-slate-900" />
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}