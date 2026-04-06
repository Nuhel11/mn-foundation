import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Projects from '@/components/Projects';

// This 'export default' is what makes the file a "Module"
export default function MarketingPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <Projects />
    </main>
  );
}