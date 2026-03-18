import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import HelpSection from '@/components/HelpSection';
import Projects from '@/components/Projects';

// This 'export default' is what makes the file a "Module"
export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <HelpSection />
      <Projects />
    </main>
  );
}