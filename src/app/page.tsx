import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <main className="bg-black">
      <ScrollEffects />
      <Header />
      <Hero />
      <ProjectsSection />
      <TechStack />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
