import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Experience from "./components/experience";
import Contact from "./components/contact";
import "./globals.css";

export default function Homepage() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
