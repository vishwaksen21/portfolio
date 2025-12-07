import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Achievements } from '@/components/sections/achievements';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Education />
      <Achievements />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}
