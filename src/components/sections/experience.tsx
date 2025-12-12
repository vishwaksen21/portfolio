'use client';

import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Intern',
    company: 'ISRO - Sriharikota',
    period: 'Jun 2025 - Aug 2025',
    description: 'Developed ML project on meteorological datasets',
  },
  {
    role: 'Software Intern',
    company: 'Quabyt Technologies',
    period: 'Sep 2025 - Dec 2025',
    description: 'Contributed to software development projects',
  },
  {
    role: 'Technical Lead',
    company: 'Center for Cognitive Activities - CMRIT',
    period: 'Apr 2025 - Present',
    description: 'Leading technical team for college events',
  },
  {
    role: 'Event Management Head',
    company: 'Innovation Club - CMRIT',
    period: 'Nov 2025 - Present',
    description: 'Organizing innovation activities and workshops',
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-muted/30"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">Experience</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
            Professional Journey
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="p-2 rounded-lg bg-primary/10 mt-1">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground font-medium">{exp.company}</p>
                <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                <p className="text-sm text-foreground/80 mt-2">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
