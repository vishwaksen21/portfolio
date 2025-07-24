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
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 6.048.005 10.992-4.939 10.994-10.992.002-3.026-1.16-5.873-3.256-7.967-2.096-2.096-4.94-3.256-7.967-3.257-6.049 0-10.993 4.944-10.993 10.993 0 2.205.643 4.288 1.887 6.079l-1.211 4.439 4.64-1.211zM11.999 5.348a6.65 6.65 0 00-6.652 6.652c0 1.743.682 3.333 1.81 4.565l.129.13.084.148-1.034 3.791 3.91-1.025.13.083c1.21.731 2.55 1.129 3.924 1.13 3.676 0 6.652-2.976 6.652-6.652s-2.977-6.652-6.652-6.652zm3.322 8.271c-.124.272-.462.433-.789.513-.327.081-.789.15-1.841-.33-1.051-.48-1.972-1.282-2.731-2.27l-.066-.089c-.759-.988-1.259-2.122-1.298-2.242-.038-.121.332-.513.433-.614.1-.1.229-.24.33-.359.099-.119.198-.24.297-.359.1-.119.229-.18.33-.298.1-.119.06-.239-.019-.358-.08-.12-.731-1.761-.988-2.352-.257-.591-.513-.501-.709-.513h-.18c-.198 0-.462.06-.66.3-.199.24-.731.71-1.129 1.5-.398.789-1.3 2.521-1.298 4.022.002 1.503 1.349 2.941 1.545 3.159.199.219 2.19 3.52 5.34 4.719 3.15.199 4.39.298 4.88.24.49-.059 1.5-.614 1.719-1.2.218-.581.218-1.079.158-1.2-.06-.121-.219-.18-.38-.24z" />
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
