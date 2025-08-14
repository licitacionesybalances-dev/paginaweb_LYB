
'use client';

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
