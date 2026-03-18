import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import HelpSection from '@/components/HelpSection';
import Projects from '@/components/Projects'; // Add this

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <HelpSection />
      <Projects /> {/* New Projects Section */}
    </main>
  );
}