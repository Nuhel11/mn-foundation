import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';

import Projects from '@/components/Projects'; // Add this

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      
      <Projects /> {/* New Projects Section */}
    </main>
  );
}