import { AboutContact } from "@/components/sections/AboutContact";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Process />
      <AboutContact />
      <Contact />
    </div>
  );
}
