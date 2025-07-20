import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <p className="font-semibold text-muted-foreground tracking-widest">HEY THERE!</p>
              <h1 className="text-5xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
                I AM C VISHWAK SEN
              </h1>
              <p className="text-muted-foreground md:text-xl">
                COMPUTER SCIENCE AND DATA SCIENCE STUDENT
              </p>
            </div>
             <div className="flex items-center gap-4">
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Email">
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            <div className="flex">
              <Button size="lg" className="rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out px-10 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground" asChild>
                <Link href="#portfolio">
                  SEE MY WORK
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-end justify-center h-full min-h-[400px] lg:min-h-[600px]">
            <div className="absolute inset-0 w-full h-full">
              <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                <defs>
                  <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 0.5}} />
                  </radialGradient>
                </defs>
                <path d="M250,0 C388.07,0 500,111.93 500,250 C500,388.07 388.07,500 250,500 C111.93,500 0,388.07 0,250 C0,111.93 111.93,0 250,0 Z" transform="translate(150, 0) scale(1.4)" fill="url(#grad1)"/>
                <circle cx="450" cy="100" r="30" fill="url(#grad1)" fillOpacity="0.5" />
                 <circle cx="400" cy="180" r="20" fill="url(#grad1)" fillOpacity="0.5" />
              </svg>
            </div>
            <Image
              src="https://placehold.co/450x600.png"
              alt="Photo of C Vishwak Sen"
              width={450}
              height={600}
              className="relative z-10 object-contain object-bottom"
              data-ai-hint="male student"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
