
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="py-12 md:px-8 md:py-24 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-muted-foreground">ABOUT ME</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
      </div>
    </footer>
  );
}
