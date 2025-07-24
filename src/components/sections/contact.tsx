'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );
}


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
                  <WhatsappIcon className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
