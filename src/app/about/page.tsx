import { About } from '@/components/sections/about';

export const metadata = {
  title: 'About - Vishwak Sen Tadigotla',
  description: 'Learn more about Vishwak Sen Tadigotla, a Full Stack Developer passionate about building innovative solutions with AI/ML integration.',
  openGraph: {
    title: 'About - Vishwak Sen Tadigotla',
    description: 'Learn more about Vishwak Sen Tadigotla, a Full Stack Developer passionate about building innovative solutions with AI/ML integration.',
    url: 'https://vishwaksen.vercel.app/about',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <About />
    </div>
  );
}
