import { Separator } from "../ui/separator";
import Link from "next/link";
import { Linkedin, Github, Mail, Download } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/c-vishwak-sena-b61212286/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/vishwaksen21/", icon: Github, label: "GitHub" },
  { href: "mailto:chilukurvishwak21@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-8 md:py-12 bg-muted/30 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </Link>
            ))}
            <Link
              href="/1CR23CD017_C Vishwak Sena_Resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
            </Link>
          </div>
          <Separator className="w-24" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} C Vishwak Sena. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground/70">
            1CR23CD017, CMR Institute of Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
