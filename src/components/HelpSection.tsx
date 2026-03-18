import Image from 'next/image';

const programs = [
  {
    title: 'Shelter Aid',
    description: 'Providing safer homes for families affected by the floods and adverse weather.',
    image: '/ShelterAid.jpg', 
  },
  {
    title: 'Medical Aid',
    description: 'Providing life changing treatment to vulnerable people suffering from illness/diseases and those who have suffered from road traffic accidents.',
    image: '/MedicalAid.jpg', 
  },
  {
    title: 'Providing livelihood',
    description: 'Offering guidance and financial support to farmers and agricultural workers who are affected by automotive changes and flooding.',
    image: '/Livelihood.jpg',
  },
];

export default function HelpSection() {
  return (
    <section className="relative bg-[#4a4a4a] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-5xl font-bold tracking-tight">Our Help</h2>
        <p className="mx-auto mb-16 max-w-2xl text-lg text-gray-300">
          Supporting people in Bangladesh to a safer and brighter future.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64 w-full bg-gray-100">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-grow flex-col items-start p-8 text-left">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}