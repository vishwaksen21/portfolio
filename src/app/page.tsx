import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';
import { Education } from '@/components/sections/education';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <About />
      <Education />
      <Portfolio />
      <Skills />
    </div>
  );
}
