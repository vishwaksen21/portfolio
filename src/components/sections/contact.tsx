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
      <path d="M19.11 4.93A9.92 9.92 0 0 0 12 2C6.54 2 2.13 6.43 2 11.89c0 1.91.49 3.73 1.42 5.29L2 22l5.05-1.34a9.92 9.92 0 0 0 4.95 1.26h.01c5.46 0 9.87-4.43 9.88-9.88a9.88 9.88 0 0 0-2.78-6.91zM12 20.38h-.01a8.41 8.41 0 0 1-4.26-1.15l-.3-.18-3.18.84.85-3.1-.2-.32a8.41 8.41 0 0 1-1.29-4.48c0-4.64 3.78-8.42 8.43-8.42a8.42 8.42 0 0 1 8.42 8.42c0 4.64-3.78 8.42-8.42 8.42zM16.56 13.99c-.18-.09-1.07-.53-1.23-.59-.17-.06-.29-.09-.42.09-.12.18-.46.59-.57.7-.11.12-.22.13-.41.04-.19-.09-1.84-1.22-2.88-2.34-.81-.89-1.36-1.99-1.52-2.34-.16-.35-.01-.54.08-.63.08-.08.18-.21.27-.31.1-.11.13-.18.19-.31.06-.12.03-.23 0-.32s-.42-1.01-.57-1.38c-.15-.36-.31-.32-.42-.32h-.38c-.12 0-.31.04-.46.18-.16.14-.58.56-.58 1.38 0 .82.59 1.6.67 1.72s1.17 1.8 2.83 2.51c.39.17.69.27.93.35.48.15.91.13 1.24.08.38-.06 1.07-.44 1.22-.86.15-.42.15-.78.11-.86-.05-.09-.17-.14-.35-.23z"/>
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
