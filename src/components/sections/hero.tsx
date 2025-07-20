
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
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
                <Link href="https://www.linkedin.com/in/c-vishwak-sena-b61212286" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link href="https://github.com/vishwaksen21" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link href="mailto:chilukurvishwak21@gmail.com" aria-label="Email">
                  <Mail className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
                </Link>
                <Link href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300" />
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
          <div className="relative hidden lg:flex items-center justify-center h-full min-h-[400px] lg:min-h-[500px]">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/stunning-car-34200.appspot.com/o/i-or6g170h1rkaq04g1c%2Fhero.png?alt=media&token=e110ac57-8495-46aa-9d5f-972175a022cb"
              alt="Photo of C Vishwak Sen"
              width={450}
              height={600}
              className="relative z-10 object-contain object-bottom"
            />
          </div>
        </div>
      </div>
       <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 -z-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
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
    </section>
  );
}
