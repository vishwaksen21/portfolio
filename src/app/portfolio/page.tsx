import { Portfolio } from '@/components/sections/portfolio';

export const metadata = {
  title: 'Portfolio - Vishwak Sen Tadigotla',
  description: 'View my portfolio of projects including web development, AI/ML applications, and full-stack solutions.',
  openGraph: {
    title: 'Portfolio - Vishwak Sen Tadigotla',
    description: 'View my portfolio of projects including web development, AI/ML applications, and full-stack solutions.',
    url: 'https://vishwaksen.vercel.app/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <Portfolio />
    </div>
  );
}
