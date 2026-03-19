import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, MapPin, Users, Calendar, Heart } from 'lucide-react';

// 1. Define the Project Structure
interface Project {
  title: string;
  location: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  beneficiaries: string;
  image: string;
  description: string;
  details: string;
}

// 2. The Complete Project Data
const projectData: Record<string, Project> = {
  'shelter-homes': {
    title: "Shelter Homes for Displaced Families",
    location: "Sylhet, Bangladesh",
    status: "Ongoing",
    beneficiaries: "150+ Families",
    image: "/shelter.jpg",
    description: "Building safe, climate-resilient homes for those who have lost everything to natural disasters.",
    details: "Our shelters are built using sustainable materials designed to withstand heavy monsoon rains and flooding. Each home provides a private, secure space for families to rebuild their lives in dignity.",
  },
  'livelihood': {
    title: "Empowering Sustainable Livelihoods",
    location: "Rural Bangladesh",
    status: "Ongoing",
    beneficiaries: "500+ Workers",
    image: "/livelihood-second.jpg",
    description: "Providing tools, training, and livestock to help families break the cycle of poverty.",
    details: "We provide rickshaws, sewing machines, and livestock to widowed or unemployed heads of households. By giving them the means to earn an honest living, we ensure long-term independence.",
  },
  'education': {
    title: "Education & School Meal Program",
    location: "Multiple Districts",
    status: "Ongoing",
    beneficiaries: "1,200+ Children",
    image: "/study.jpg",
    description: "Ensuring every child has access to quality learning and a nutritious meal every day.",
    details: "Hunger is the biggest barrier to education. Our program provides free stationary and daily hot meals to students, significantly increasing school attendance and performance.",
  },
  'health': {
    title: "Emergency Health & Medical Aid",
    location: "Dhaka & Remote Areas",
    status: "Completed",
    beneficiaries: "2,000+ Patients",
    image: "/health.jpg",
    description: "Providing free healthcare, medicine, and emergency surgery to those who cannot afford it.",
    details: "From mobile eye clinics to emergency surgeries, we bridge the gap between poverty and life-saving medical care. Our recent camp treated over 2,000 patients with free consultations.",
  }
};

// 3. The Main Page Component (Async for Next.js 16)
export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Unwrapping params (Fixes the Next.js sync-dynamic-apis error)
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const project = projectData[id];

  // Handle Missing Projects
  if (!project) {
    return (
      <div className="pt-40 text-center min-h-screen bg-white">
        <h1 className="text-2xl font-bold text-slate-900">Project not found</h1>
        <p className="text-slate-500 mt-2">Could not find project with ID: {id}</p>
        <Link href="/#projects" className="text-emerald-600 mt-6 inline-block underline text-lg font-medium">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Header Section */}
      <div className="relative h-[60vh] w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className="object-cover" 
          priority 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-12 text-white">
            <Link href="/#projects" className="mb-6 inline-flex items-center gap-2 transition-colors hover:text-emerald-400">
              <ChevronLeft size={20} /> Back to Projects
            </Link>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">{project.title}</h1>
          </div>
        </div>
      </div>

      {/* Impact Stats Bar */}
      <div className="border-b border-slate-100 bg-slate-50 py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-100 p-2">
                <MapPin className="text-emerald-600" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Location</p>
              <p className="font-semibold text-slate-900">{project.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-100 p-2">
                <Users className="text-emerald-600" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Impact</p>
              <p className="font-semibold text-slate-900">{project.beneficiaries}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-100 p-2">
                <Calendar className="text-emerald-600" size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Status</p>
              <p className="font-semibold text-slate-900">{project.status}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Sidebar */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-3">
        {/* Left Column: Text */}
        <div className="space-y-8 lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">About this Project</h2>
          <p className="text-xl leading-relaxed font-medium text-slate-600">
            {project.description}
          </p>
          <div className="h-px w-full bg-slate-100" />
          <p className="text-lg leading-relaxed text-slate-600">
            {project.details}
          </p>
        </div>

        {/* Right Column: Sticky Call to Action */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 rounded-[2.5rem] bg-slate-900 p-10 text-white shadow-2xl">
            <h3 className="mb-4 text-2xl font-bold">Support This Cause</h3>
            <p className="mb-10 text-sm leading-relaxed text-slate-400">
              Your contribution helps us expand our {project.title.toLowerCase()} efforts. 100% of your donation goes directly to the field.
            </p>
            <Link 
              href="/donate" 
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 py-5 text-center font-bold transition-all hover:bg-emerald-500"
            >
              <Heart size={20} className="transition-transform group-hover:scale-110" /> 
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}