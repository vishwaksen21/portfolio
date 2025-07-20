import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Stats } from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Skills />
    </div>
  );
}
