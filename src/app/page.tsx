import About from "@/components/About";
import { Contact } from "@/components/Contact";
import HeroBanner from "@/components/HeroBanner";
import NavBar from "@/components/navbar/NavBar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroBanner />
        <Services />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
