
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-8 md:py-16 lg:py-20 bg-canvas border-b-2 md:border-b-4 border-ink relative"
    >
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 bg-accent"></div>
          <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold tracking-normal text-ink uppercase">
            The&nbsp;Journal
          </h2>
        </div>
        
        <div className="grid gap-6 lg:gap-24 lg:grid-cols-12 items-start mt-6">
          
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-48 sm:w-64 lg:w-full mx-auto border-2 md:border-4 border-ink bg-paper p-3 md:p-4 shadow-blueprint relative"
            >

              <Image
                src="/vishwak_professional.png"
                alt="C Vishwak Sena - Professional Photo"
                width={400}
                height={500}
                loading="lazy"
                className="w-full h-auto object-cover border-2 border-ink grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="mt-4 pt-4 border-t-2 border-ink text-center">
                <p className="text-xs font-bold tracking-widest uppercase text-ink">C. Vishwak Sena</p>
                <p className="text-[10px] tracking-widest uppercase text-ink-secondary mt-1">Computer Science & Data Science</p>
                <p className="text-[10px] tracking-widest uppercase text-ink-secondary mt-1">CMRIT • CGPA: 9.06/10</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-2 inline-block">
                  Who I Am
                </h3>
                <p className="text-base md:text-lg text-ink leading-relaxed font-medium">
                  I am a builder deeply fascinated by the intersection of data and intelligent systems. I don't just write code; I construct solutions designed to scale, learn, and adapt.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.3 }}
                className="space-y-4"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-2 inline-block">
                  What Drives Me
                </h3>
                <p className="text-base md:text-lg text-ink leading-relaxed font-medium">
                  Curiosity is my primary engine. I am driven by the mechanics behind complex algorithms and the challenge of translating abstract data into tangible, high-impact architecture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.4 }}
                className="space-y-4"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-2 inline-block">
                  What I Build
                </h3>
                <p className="text-base md:text-lg text-ink leading-relaxed font-medium">
                  My work spans across foundational programming in Python, C, and Java, extending into the realms of Machine Learning. I design models, structure databases, and engineer robust applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
                className="space-y-4"
              >
                <h3 className="text-sm font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-2 inline-block">
                  Why I Build It
                </h3>
                <p className="text-base md:text-lg text-ink leading-relaxed font-medium">
                  Technology should solve real-world friction. Whether it's optimizing a process through an internship or leading initiatives as a Student Placement Coordinator, I build to create measurable impact.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
