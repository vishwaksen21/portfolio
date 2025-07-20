import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary">Hey there!</p>
              <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                I AM JO BREED
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Creative Art Director & Designer
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" asChild>
                <Link href="#portfolio">
                  SEE MY WORK <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-4">
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-primary to-accent rounded-full -translate-x-4 translate-y-4 opacity-30 blur-3xl" />
            <Image
              src="https://placehold.co/550x550.png"
              alt="Photo of Jo Breed"
              width={550}
              height={550}
              className="relative rounded-full object-cover aspect-square shadow-2xl z-10"
              data-ai-hint="person"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
