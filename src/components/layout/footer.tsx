
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-muted/30 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} C Vishwak Sena. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
