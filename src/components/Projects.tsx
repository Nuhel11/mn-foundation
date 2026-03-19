import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'shelter-homes', // Matches the key in your [id]/page.tsx
    title: 'Shelter',
    description: 'Building safe homes for families.',
    image: '/shelter.jpg',
    href: '/projects/shelter-homes',
  },
  {
    id: 'livelihood',
    title: 'Empowering livelihood',
    description: "Supporting those whose livelihood has been adversely affected.",
    image: '/livelihood-second.jpg',
    href: '/projects/livelihood',
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Supporting learning for children and providing school meals.',
    image: '/study.jpg',
    href: '/projects/education',
  },
  {
    id: 'medical-aid', // Matches the key in your [id]/page.tsx
    title: 'Health',
    description: 'Providing access to basic healthcare services and treatments.',
    image: '/health.jpg',
    href: '/projects/medical-aid',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <h2 className="mb-16 text-center text-5xl font-bold text-slate-900">
          Projects
        </h2>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group block">
              <div className="space-y-6">
                
                {/* Image Container */}
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-[300px] w-full cursor-pointer overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-sm">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Text Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600">
                        {project.title}
                      </h3>
                      <p className="text-lg text-slate-500">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Top Right Arrow */}
                    <Link href={`/projects/${project.id}`} className="mt-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-6 w-6 text-slate-900" />
                    </Link>
                  </div>

                  {/* Your New "View Details" Link */}
                  <Link 
                    href={`/projects/${project.id}`} 
                    className="group/link mt-2 inline-flex items-center font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                  >
                    View Details 
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}