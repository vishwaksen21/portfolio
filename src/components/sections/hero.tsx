
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Github, Mail, Instagram, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsappIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);

const LeetCodeIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-200"
        fill="currentColor"
    >
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
    </svg>
);

export function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full py-12 md:py-16 lg:py-20 bg-transparent border-b-4 border-ink"
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 border-2 border-ink text-xs font-bold tracking-widest uppercase text-ink bg-paper shadow-blueprint"
              >
                SOFTWARE & DATA ENGINEERING
              </motion.div>
              
              <motion.h1 
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
                  }
                }}
                className="font-display text-2xl leading-[1.1] sm:text-6xl md:text-7xl lg:text-[7rem] font-bold tracking-normal text-ink uppercase"
              >
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} 
                  className="block"
                >
                  TURNING
                </motion.span>
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} 
                  className="block"
                >
                  CURIOSITY
                </motion.span>
                <motion.span 
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} 
                  className="block text-accent"
                >
                  INTO SYSTEMS.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed text-ink-secondary font-medium border-l-2 md:border-l-4 border-accent pl-3 md:pl-4"
              >
                I am <strong className="text-ink font-bold">C Vishwak Sena</strong>, a Computer Science & Data Science student. I build data-driven solutions and intelligent systems with Python, C, and Java.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <Link href="https://www.linkedin.com/in/c-vishwak-sena-b61212286/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/vishwaksen21/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://leetcode.com/u/vishwak_sen21/" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <LeetCodeIcon />
              </Link>
              <Link href="mailto:cvi23csds@cmrit.ac.in" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <Mail className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/vishwak_sen21?igsh=MXhxY2dmY251NjNvbQ==" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/917019151370" target="_blank" rel="noopener noreferrer" className="p-2 -m-2 text-ink-secondary hover:text-ink transition-colors">
                <WhatsappIcon />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto h-10 sm:h-14 rounded-none border-2 md:border-4 border-ink bg-ink text-canvas hover:bg-canvas hover:text-ink transition-colors font-bold tracking-widest uppercase shadow-blueprint active:scale-[0.98] text-xs sm:text-sm"
                asChild
              >
                <Link href="/portfolio">Explore Work</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-10 sm:h-14 rounded-none border-2 md:border-4 border-ink bg-canvas text-ink hover:bg-ink hover:text-canvas transition-colors font-bold tracking-widest uppercase shadow-blueprint active:scale-[0.98] text-xs sm:text-sm"
                asChild
              >
                <Link href="/contact">Let's Connect</Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 hidden md:flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <motion.div 
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="relative border-2 md:border-4 border-ink bg-paper p-4 shadow-blueprint">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-ink" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-ink" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-ink" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-ink" />
                
                <div className="bg-canvas border-2 border-ink overflow-hidden aspect-video sm:aspect-square lg:aspect-[4/5] relative">
                  <Image
                    src="/vishwak_p-.png"
                    alt="Photo of C Vishwak Sen"
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
                <div className="mt-4 flex justify-between items-end border-t-2 border-ink pt-2">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-ink">LOCATION: BENGALURU, IN</p>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-ink">BATCH: 2027</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-ink text-right">ID: CVS-001</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
