import { Contact } from '@/components/sections/contact';

export const metadata = {
  title: 'Contact - Vishwak Sen Tadigotla',
  description: 'Get in touch with me for collaboration opportunities, project inquiries, or just to say hello.',
  openGraph: {
    title: 'Contact - Vishwak Sen Tadigotla',
    description: 'Get in touch with me for collaboration opportunities, project inquiries, or just to say hello.',
    url: 'https://vishwaksen.vercel.app/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <Contact />
    </div>
  );
}
