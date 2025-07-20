import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
    </div>
  );
}
