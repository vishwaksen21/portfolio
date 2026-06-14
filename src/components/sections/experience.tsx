'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
const experiences = [
  {
    period: 'Jan 2026 - Mar 2026',
    title: 'Web Development Intern at Sohum Trust',
    description: 'Contributed to the design, development, and maintenance of web-based applications supporting educational initiatives.',
  },
  {
    period: 'Sep 2025 - Dec 2025',
    title: 'Software Development Intern at Quabyt Technologies',
    description: 'Developed and deployed AI-powered web applications like Avelyn, integrating frontend and backend features while optimizing performance.',
  },
  {
    period: 'Aug 2024 - Nov 2024',
    title: 'Software Intern at ISRO - SDSC SHAR',
    description: 'Processed and cleaned large-scale meteorological datasets using Python, automating validation workflows for organizing meteorological data.',
  },
  {
    period: 'Nov 2025 - Present',
    title: 'Event Management Head at Innovation Club - CMRIT',
    description: 'Organizing innovation-focused activities and workshops for skill development, including leading The Social Hackathon\'26.',
  },
  {
    period: 'Apr 2025 - Present',
    title: 'Technical Lead at Centre for Cognitive Activities - CMRIT',
    description: 'Leading technical team for college-wide events, hackathons, and managing technical competitions.',
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-16 lg:py-20 bg-canvas border-b-4 border-ink relative"
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-3 bg-accent"></div>
          <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink uppercase">
            The Journey
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative mt-12">
          {/* Vertical Timeline Axis */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-ink -ml-[2px]" />

          <div className="space-y-8 md:space-y-0">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start md:items-start w-full",
                    index > 0 && "md:-mt-16 lg:-mt-24"
                  )}
                >
                  {/* Marker */}
                  <div className="absolute left-[20px] md:left-1/2 w-8 h-8 border-2 md:border-4 border-ink bg-paper rounded-none -ml-4 top-4 md:top-6 z-10 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 bg-accent" />
                  </div>

                  {/* Horizontal Connection Lines */}
                  <div className={cn(
                    "hidden md:block absolute top-8 md:top-10 h-[4px] bg-ink z-0",
                    isEven ? "right-[50%] w-16" : "left-[50%] w-16"
                  )} />
                  {/* Removed the mobile horizontal line for a cleaner look */}

                  {/* Desktop Layout - Alternating */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-12 sm:pl-16 md:pl-0",
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:ml-auto"
                  )}>
                    <div className="border-2 md:border-4 border-ink bg-paper p-4 md:p-6 shadow-blueprint relative group hover:-translate-y-1 transition-transform duration-300">
                      
                      <div className={cn(
                        "mb-4 flex",
                        isEven ? "justify-start md:justify-end" : "justify-start"
                      )}>
                        <p className="text-[10px] font-bold tracking-widest uppercase text-accent bg-canvas border-2 border-ink px-2 py-1 inline-block">
                          {exp.period}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-display text-lg md:text-xl font-bold text-ink uppercase leading-tight mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-ink-secondary text-sm font-medium leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
