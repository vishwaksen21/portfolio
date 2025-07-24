'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhatsappIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.41.2.52.28.11.08.24.18.34.3.1.13.16.25.18.31.02.06.02.25 0 .51-.03.25-.21.48-.41.68-.2.19-.46.36-.78.5-.32.14-.71.2-1.16.14-.45-.06-1-.25-1.64-.53-.64-.28-1.22-.63-1.72-1.03-.51-.4-1.03-.9-1.47-1.46-1.03-1.3-1.63-2.35-1.79-3.13-.16-.78.16-1.45.68-1.92.52-.47 1.14-.59 1.62-.46.48.13.86.63.98 1.1.12.47.11.96.02 1.41-.1.45-.19.83-.34 1.16-.15.32-.3.58-.45.77-.15.19-.28.35-.37.45l-.09.11c-.07.08-.13.15-.15.19-.02.04-.02.06 0 .11.02.05.06.11.13.19.07.08.16.17.28.28.11.11.23.23.37.36.14.13.28.26.42.38.14.12.28.23.41.32.13.09.25.17.34.23.1.06.18.1.23.11h.02zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
    </svg>
);


export function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-12 sm:py-16 bg-muted/50"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">CONTACT</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="p-6 space-y-4 text-center">
              <div className="flex items-center justify-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:chilukurvishwak21@gmail.com" className="text-lg text-muted-foreground hover:text-primary">
                  chilukurvishwak21@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <span className="text-lg text-muted-foreground">+91 7019151370</span>
              </div>
              <div className="flex justify-center gap-6 pt-4">
                <Link
                  href="https://www.linkedin.com/in/c-vishwak-sena-b61212286"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link
                  href="https://github.com/vishwaksen21"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link
                  href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
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
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}