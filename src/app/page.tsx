import { Hero } from '@/components/sections/hero';
import { Portfolio } from '@/components/sections/portfolio';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Portfolio />
      <Skills />
    </div>
  );
}
