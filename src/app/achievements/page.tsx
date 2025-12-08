import { Achievements } from '@/components/sections/achievements';

export const metadata = {
  title: 'Achievements - Vishwak Sen Tadigotla',
  description: 'My achievements, certifications, and recognitions in competitive programming and hackathons.',
  openGraph: {
    title: 'Achievements - Vishwak Sen Tadigotla',
    description: 'My achievements, certifications, and recognitions in competitive programming and hackathons.',
    url: 'https://vishwaksen.vercel.app/achievements',
  },
};

export default function AchievementsPage() {
  return (
    <div className="bg-background">
      <Achievements />
    </div>
  );
}
