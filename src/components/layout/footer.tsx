import { Separator } from "../ui/separator";
import Link from "next/link";
import { Linkedin, Github, Mail, Download } from "lucide-react";

const socialLinks = [
  { href: "https://www.linkedin.com/in/c-vishwak-sena-b61212286/", label: "LINKEDIN", icon: Linkedin },
  { href: "https://github.com/vishwaksen21/", label: "GITHUB", icon: Github },
  { href: "mailto:chilukurvishwak21@gmail.com", label: "EMAIL", icon: Mail },
  { href: "https://drive.google.com/file/d/1MoVJBzBhQhRc2mI4jdJMyAR8jL-mhacP/view?usp=drive_link", label: "RESUME", icon: Download }
];

export function Footer() {
  return (
    <footer className="py-8 md:py-16 bg-ink border-t-4 border-accent relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          
          <div className="space-y-2">
            <h2 className="font-display text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-canvas uppercase leading-none">
              C. VISHWAK SENA
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-none" />
              <p className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-canvas/50">
                SOFTWARE & DATA ENGINEERING
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 border-y border-canvas/10 md:border-y-0 py-4 md:py-0 w-full md:w-auto">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-bold tracking-widest uppercase text-canvas/70 hover:text-accent transition-colors"
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>

          <div className="text-left md:text-right w-full md:w-auto flex flex-row md:flex-col justify-between items-center md:items-end">
            <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-canvas">
              &copy; {new Date().getFullYear()} C.V.S.
            </p>
            <p className="text-[8px] md:text-[10px] tracking-widest uppercase text-canvas/40 mt-0 md:mt-1">
              ALL RIGHTS RESERVED
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
