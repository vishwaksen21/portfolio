import { Experience } from '@/components/sections/experience';

export const metadata = {
  title: 'Experience - Vishwak Sen Tadigotla',
  description: 'Explore my professional experience including internships at ISRO and leadership roles in college organizations.',
  openGraph: {
    title: 'Experience - Vishwak Sen Tadigotla',
    description: 'Explore my professional experience including internships at ISRO and leadership roles in college organizations.',
    url: 'https://vishwaksen.vercel.app/experience',
  },
};

export default function ExperiencePage() {
  return (
    <div className="bg-background">
      <Experience />
    </div>
  );
}
