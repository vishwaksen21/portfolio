
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="py-12 md:px-8 md:py-24 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} C Vishwak Sen. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
