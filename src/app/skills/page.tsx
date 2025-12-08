import { Skills } from '@/components/sections/skills';

export const metadata = {
  title: 'Skills - Vishwak Sen Tadigotla',
  description: 'My technical skills, certifications, and expertise in full-stack development, AI/ML, and cloud technologies.',
  openGraph: {
    title: 'Skills - Vishwak Sen Tadigotla',
    description: 'My technical skills, certifications, and expertise in full-stack development, AI/ML, and cloud technologies.',
    url: 'https://vishwaksen.vercel.app/skills',
  },
};

export default function SkillsPage() {
  return (
    <div className="bg-background">
      <Skills />
    </div>
  );
}
