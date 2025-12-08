
"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/achievements", label: "Achievements" },
  { href: "/portfolio", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-semibold text-base md:text-lg">
              Portfolio
            </span>
          </Link>
        </div>
        <div className="hidden items-center justify-center space-x-6 md:space-x-8 md:flex md:flex-1 md:justify-center">
          <nav className="flex items-center space-x-6 md:space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSheetOpen(false)}
                className={cn(
                  "transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/70"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <div className="flex items-center md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pr-0 w-[280px] sm:w-[350px]">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <Link href="/" className="flex items-center space-x-2 p-6">
                    <span className="font-semibold text-lg">
                      Portfolio
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
                            "text-foreground text-base font-medium transition-colors hover:text-primary",
                             pathname === link.href ? "text-primary font-semibold" : "text-foreground/80"
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
