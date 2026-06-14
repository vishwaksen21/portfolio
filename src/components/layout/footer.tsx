import { Separator } from "../ui/separator";
import Link from "next/link";
import { Linkedin, Github, Mail, Download } from "lucide-react";

const footerLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/experience", label: "JOURNEY" },
  { href: "/achievements", label: "MILESTONES" },
  { href: "/portfolio", label: "WORK" },
  { href: "/skills", label: "SKILLS" },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/c-vishwak-sena-b61212286/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/vishwaksen21/", icon: Github, label: "GitHub" },
  { href: "mailto:chilukurvishwak21@gmail.com", icon: Mail, label: "Email" },
];

export function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-canvas border-t-4 border-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />
      <div className="container px-4 md:px-6 relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-8">
          
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-ink uppercase">
            Let's Build Something Meaningful.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full mt-8">
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-bold tracking-widest uppercase text-ink-secondary hover:text-accent border-b-2 border-transparent hover:border-accent transition-all pb-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="w-full h-px bg-ink/20 my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-secondary hover:text-ink transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1MoVJBzBhQhRc2mI4jdJMyAR8jL-mhacP/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-secondary hover:text-ink transition-colors flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
                aria-label="View Resume"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>

            <div className="text-right">
              <p className="text-xs font-bold tracking-widest uppercase text-ink">
                &copy; {new Date().getFullYear()} C.V.S.
              </p>
              <p className="text-[10px] tracking-widest uppercase text-ink-secondary mt-1">
                ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
