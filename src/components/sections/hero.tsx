
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsappIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
        fill="currentColor"
    >
        <path d="M19.11 4.93A9.92 9.92 0 0 0 12 2C6.54 2 2.13 6.43 2 11.89c0 1.91.49 3.73 1.42 5.29L2 22l5.05-1.34a9.92 9.92 0 0 0 4.95 1.26h.01c5.46 0 9.87-4.43 9.88-9.88a9.88 9.88 0 0 0-2.78-6.91zM12 20.38h-.01a8.41 8.41 0 0 1-4.26-1.15l-.3-.18-3.18.84.85-3.1-.2-.32a8.41 8.41 0 0 1-1.29-4.48c0-4.64 3.78-8.42 8.43-8.42a8.42 8.42 0 0 1 8.42 8.42c0 4.64-3.78 8.42-8.42 8.42zM16.56 13.99c-.18-.09-1.07-.53-1.23-.59-.17-.06-.29-.09-.42.09-.12.18-.46.59-.57.7-.11.12-.22.13-.41.04-.19-.09-1.84-1.22-2.88-2.34-.81-.89-1.36-1.99-1.52-2.34-.16-.35-.01-.54.08-.63.08-.08.18-.21.27-.31.1-.11.13-.18.19-.31.06-.12.03-.23 0-.32s-.42-1.01-.57-1.38c-.15-.36-.31-.32-.42-.32h-.38c-.12 0-.31.04-.46.18-.16.14-.58.56-.58 1.38 0 .82.59 1.6.67 1.72s1.17 1.8 2.83 2.51c.39.17.69.27.93.35.48.15.91.13 1.24.08.38-.06 1.07-.44 1.22-.86.15-.42.15-.78.11-.86-.05-.09-.17-.14-.35-.23z"/>
    </svg>
);

export function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-12 md:py-16 lg:py-20 bg-background overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="relative flex flex-col items-center justify-center order-first lg:order-last">
            <Image
              src="https://live.staticflickr.com/65535/54676775546_80aa7635f0_z.jpg"
              alt="Photo of C Vishwak Sen"
              width={450}
              height={600}
              className="relative z-10 object-contain object-bottom max-h-[400px] lg:max-h-[500px] w-auto"
              priority
              data-ai-hint="man portrait"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-4">
              <p className="font-semibold text-muted-foreground tracking-widest">HEY THERE!</p>
              <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
                I AM C VISHWAK SEN
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-xl">
                CS & Data Science | Python & C Programmer | Exploring Data-Driven Solutions | Student at CMR Institute of Technology
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/c-vishwak-sena-b61212286"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
              </Link>
              <Link href="https://github.com/vishwaksen21" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
              </Link>
              <Link href="mailto:chilukurvishwak21@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
              </Link>
              <Link
                href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
              </Link>
              <Link
                  href="https://wa.me/917019151370"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon />
              </Link>
            </div>
            <div className="flex">
              <Button
                size="lg"
                className="rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out px-10 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground"
                asChild
              >
                <Link href="#portfolio">SEE MY WORK</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 -z-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M0,0 C30,10 70,20 100,0 L100,100 C70,90 30,80 0,100 Z"
            transform="scale(1.5, 1) translate(-10, 0)"
          />
        </svg>
      </div>
    </motion.section>
  );
}
