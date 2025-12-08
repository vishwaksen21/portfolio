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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-muted/30"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">Let's Work Together</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">Get In Touch</h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to collaborate? Reach out for opportunities, projects, or just to connect!
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center">
            <Button
              size="lg"
              className="font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              asChild
            >
              <Link href="mailto:chilukurvishwak21@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              asChild
            >
              <Link href="https://www.linkedin.com/in/c-vishwak-sena-b61212286/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
          <Card className="border-muted shadow-xl">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-4 rounded-lg bg-muted/30">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:chilukurvishwak21@gmail.com" className="text-sm md:text-base text-foreground hover:text-primary transition-colors font-medium">
                    chilukurvishwak21@gmail.com
                  </a>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyEmail}
                  className="flex items-center gap-2"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span className="text-xs">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 p-4 rounded-lg bg-muted/30">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base text-foreground font-medium">+91 7019151370</span>
              </div>
              <div className="pt-2">
                <p className="text-center text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex justify-center gap-6">
                  <Link
                    href="https://www.linkedin.com/in/c-vishwak-sena-b61212286/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://github.com/vishwaksen21/"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ=="
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://wa.me/917019151370"
                    aria-label="WhatsApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center"
                  >
                    <WhatsappIcon />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
