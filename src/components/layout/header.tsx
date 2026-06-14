
"use client";

import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "JOURNEY" },
  { href: "/achievements", label: "MILESTONES" },
  { href: "/portfolio", label: "WORK" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 md:top-6 z-50 md:px-4 w-full flex justify-center pointer-events-none">
      <header className="pointer-events-auto w-full max-w-[1200px] border-b-2 md:border-4 border-ink border-b-accent md:border-b-ink bg-paper/95 backdrop-blur-md shadow-none md:shadow-blueprint transition-all duration-300">
        <div className="flex h-16 items-center px-4 md:px-8">
          <div className="mr-auto flex items-center">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="bg-ink text-canvas px-2 md:px-3 py-1 font-display font-bold text-lg md:text-xl tracking-widest uppercase border-2 border-transparent group-hover:bg-canvas group-hover:text-ink group-hover:border-ink transition-all duration-300">
                C.V.S
              </span>
            </Link>
          </div>
          <div className="hidden items-center justify-center space-x-6 md:space-x-8 md:flex md:flex-1 md:justify-center">
            <nav className="flex items-center space-x-6 md:space-x-8 text-xs font-bold tracking-widest uppercase">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "relative transition-colors hover:text-accent group py-2",
                    pathname === link.href ? "text-ink" : "text-ink-secondary"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-300",
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-2 rounded-none border-2 border-ink hover:bg-ink hover:text-canvas transition-all duration-300 font-bold tracking-wider uppercase text-xs hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(31,35,43,1)] hover:shadow-[4px_4px_0px_0px_rgba(31,35,43,1)]"
              asChild
            >
              <a href="https://drive.google.com/file/d/1MoVJBzBhQhRc2mI4jdJMyAR8jL-mhacP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Download className="h-3 w-3" />
                Resume
              </a>
            </Button>
          <div className="flex items-center md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-none hover:bg-transparent h-12 w-12">
                    <Menu className="h-8 w-8 text-ink" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="pr-0 w-[280px] sm:w-[350px] bg-paper border-l-4 border-ink">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <Link href="/" className="flex items-center space-x-2 p-6 border-b-2 border-ink">
                    <span className="font-display font-bold text-xl tracking-widest uppercase">
                      C.V.S
                    </span>
                  </Link>
                  <div className="my-6 px-6 space-y-1">
                    <div className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setSheetOpen(false)}
                           className={cn(
                            "block py-3 text-sm font-bold tracking-widest uppercase transition-colors hover:text-accent",
                             pathname === link.href ? "text-ink" : "text-ink-secondary"
                           )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div className="pt-6 mt-6">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full gap-2 rounded-none border-2 border-ink hover:bg-ink hover:text-canvas transition-colors font-bold tracking-wider uppercase text-xs"
                        asChild
                      >
                        <a href="https://drive.google.com/file/d/1MoVJBzBhQhRc2mI4jdJMyAR8jL-mhacP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => setSheetOpen(false)}>
                          <Download className="h-4 w-4" />
                          View Resume
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
