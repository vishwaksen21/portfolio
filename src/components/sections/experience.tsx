'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Intern',
    company: 'ISRO',
    period: 'Jun - Aug 2025',
  },
  {
    role: 'Software Intern',
    company: 'Quabyt Technologies',
    period: 'Sep - Dec 2025',
  },
  {
    role: 'Technical Lead',
    company: 'CCA - CMRIT',
    period: 'Apr 2025 - Present',
  },
  {
    role: 'Event Head',
    company: 'Innovation Club - CMRIT',
    period: 'Nov 2025 - Present',
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
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-xs text-muted-foreground/80 mt-1">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
