'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Github, Instagram, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const WhatsappIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      className="transition-colors duration-200"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);


export function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chilukurvishwak21@gmail.com');
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 bg-[#1F232B] border-b-4 border-ink relative text-canvas"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#E1D4C8 1px, transparent 1px), linear-gradient(90deg, #E1D4C8 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />
      
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 border-2 border-canvas/30 text-xs font-bold tracking-widest uppercase text-canvas mb-4">
              Comm. Channel
            </div>
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.9]">
              INITIATE <br />
              <span className="text-accent">CONTACT.</span>
            </h2>
            
            <p className="text-lg text-canvas/70 font-medium max-w-md">
              Ready to collaborate, build something new, or just want to connect? Send a message and let's start the conversation.
            </p>

            <div className="pt-8 flex flex-col gap-6">
              <a href="mailto:chilukurvishwak21@gmail.com" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-canvas/20 py-4 hover:border-accent transition-colors">
                <span className="text-sm font-bold tracking-widest uppercase text-canvas group-hover:text-accent transition-colors">Email</span>
                <span className="text-lg font-medium break-all sm:break-normal">chilukurvishwak21@gmail.com</span>
              </a>
              <a href="tel:+917019151370" className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-canvas/20 py-4 hover:border-accent transition-colors">
                <span className="text-sm font-bold tracking-widest uppercase text-canvas group-hover:text-accent transition-colors">Phone</span>
                <span className="text-lg font-medium">+91 7019151370</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link href="https://github.com/vishwaksen21/" target="_blank" rel="noopener noreferrer" className="border-2 border-canvas/30 hover:border-accent hover:bg-accent hover:text-ink transition-colors p-4 rounded-none">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/vishwaksen21/" target="_blank" rel="noopener noreferrer" className="border-2 border-canvas/30 hover:border-accent hover:bg-accent hover:text-ink transition-colors p-4 rounded-none">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ==" target="_blank" rel="noopener noreferrer" className="border-2 border-canvas/30 hover:border-accent hover:bg-accent hover:text-ink transition-colors p-4 rounded-none">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://wa.me/917019151370" target="_blank" rel="noopener noreferrer" className="border-2 border-canvas/30 hover:border-accent hover:bg-accent hover:text-ink transition-colors p-4 rounded-none">
                <WhatsappIcon />
              </Link>
              <Button variant="ghost" onClick={copyEmail} className="border-2 border-canvas/30 hover:border-accent hover:bg-accent hover:text-ink transition-colors p-4 h-auto rounded-none flex items-center justify-center">
                {emailCopied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          <div className="border-4 border-canvas/20 bg-[#1A1D24] p-8 md:p-12 shadow-blueprint">
            <h3 className="text-xs font-bold tracking-widest uppercase text-canvas/50 mb-8 pb-4 border-b-2 border-canvas/10">
              Direct Transmission Form
            </h3>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const subject = formData.get('subject') as string;
              const body = formData.get('body') as string;
              const text = `Hi Vishwak! My name is ${subject}.\n\n${body}`;
              window.open(`https://wa.me/917019151370?text=${encodeURIComponent(text)}`, '_blank');
            }} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-canvas/70">Identification</label>
                <input type="text" name="subject" placeholder="Your Name" className="w-full h-14 bg-transparent border-b-2 border-canvas/30 px-2 text-canvas focus:outline-none focus:border-accent transition-colors placeholder:text-canvas/30 font-medium" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-canvas/70">Message Data</label>
                <textarea name="body" rows={4} placeholder="Your Message" className="w-full bg-transparent border-b-2 border-canvas/30 p-2 py-4 text-canvas focus:outline-none focus:border-accent transition-colors placeholder:text-canvas/30 font-medium resize-none" required></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full h-14 rounded-none border-2 border-accent bg-accent text-canvas hover:bg-transparent hover:text-accent transition-colors font-bold tracking-widest uppercase mt-4">
                Transmit Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
