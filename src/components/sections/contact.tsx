import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-muted/50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">CONTACT</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Get In Touch
          </h2>
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
                <span className="text-lg text-muted-foreground">
                  +91 7019151370
                </span>
              </div>
              <div className="flex justify-center gap-6 pt-4">
                 <Link href="https://www.linkedin.com/in/c-vishwak-sena-b61212286" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link href="https://github.com/vishwaksen21" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-8 w-8 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
