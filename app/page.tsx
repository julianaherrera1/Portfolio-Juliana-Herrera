import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <main>
     <NavBar /> 
     <Hero />
     <About />
     <Skills />
     <Services />
    </main> 
  );
}