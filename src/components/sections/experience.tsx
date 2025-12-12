'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: 'Sep - Dec 2025',
    title: 'Software Intern at Quabyt Technologies',
    description: 'Contributed to software development projects with cross-functional teams',
  },
  {
    period: 'Jun - Aug 2025',
    title: 'Software Intern at ISRO - Sriharikota',
    description: 'Developed ML project on meteorological datasets, improving model accuracy by 12%',
  },
  {
    period: 'Nov 2025 - Present',
    title: 'Event Management Head at Innovation Club - CMRIT',
    description: 'Organizing innovation-focused activities and workshops for skill development',
  },
  {
    period: 'Apr 2025 - Present',
    title: 'Technical Lead at Center for Cognitive Activities - CMRIT',
    description: 'Leading technical team for college-wide events and managing logistics',
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
      className="py-16 bg-muted/30"
    >
      <div className="container max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-medium text-primary tracking-wider uppercase mb-2">Experience</p>
          <h2 className="text-3xl font-bold text-foreground">Professional Journey</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 space-y-8">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary/30" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                
                {/* Content */}
                <div className="pb-2">
                  <p className="text-xs text-muted-foreground font-medium mb-1">{exp.period}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
