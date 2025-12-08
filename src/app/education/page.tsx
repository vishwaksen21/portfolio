import { Education } from '@/components/sections/education';

export const metadata = {
  title: 'Education - Vishwak Sen Tadigotla',
  description: 'My academic background in Computer Science and Engineering at GITAM University with a CGPA of 9.12.',
  openGraph: {
    title: 'Education - Vishwak Sen Tadigotla',
    description: 'My academic background in Computer Science and Engineering at GITAM University with a CGPA of 9.12.',
    url: 'https://vishwaksen.vercel.app/education',
  },
};

export default function EducationPage() {
  return (
    <div className="bg-background">
      <Education />
    </div>
  );
}
