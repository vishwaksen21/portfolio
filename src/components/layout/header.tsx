"use client";

import Link from "next/link";
import { Bot, Menu, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#skills", label: "SKILLS" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
             <Mountain className="h-6 w-6" />
            <span className="font-bold sm:inline-block text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              VISHWAK SEN
            </span>
          </Link>
        </div>
        <div className="hidden items-center justify-center space-x-8 md:flex md:flex-1 md:justify-center">
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/optimizer">
            <Button variant="ghost" size="icon">
              <Bot />
              <span className="sr-only">AI Optimizer</span>
            </Button>
          </Link>
          <ThemeSwitcher />
          <div className="ml-auto flex items-center md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <Link href="/" className="mr-6 flex items-center space-x-2 p-6">
                    <Mountain className="h-6 w-6" />
                    <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                      VISHWAK SEN
                    </span>
                  </Link>
                  <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                    <div className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setSheetOpen(false)}
                           className={cn(
                            "text-foreground text-lg",
                             pathname === link.href ? "text-primary font-semibold" : "text-foreground"
                           )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
      </div>
    </header>
  );
}
