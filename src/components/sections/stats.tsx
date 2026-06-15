
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const stats = [
  {
    value: '6+',
    label: 'Projects Completed',
  },
  {
    value: '9.06',
    label: 'CGPA',
  },
  {
    value: '3',
    label: 'Internships',
  },
  {
    value: '5+',
    label: 'Hackathons',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Stats() {
  return (
    <motion.section
      id="stats"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-12 md:py-16 bg-paper border-b-4 border-ink"
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 md:border-4 border-ink bg-canvas shadow-blueprint"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label} 
              variants={itemVariants}
              className={cn(
                "p-4 md:p-8 flex flex-col justify-center items-center text-center relative border-ink",
                index !== 3 && "border-b-2 md:border-b-4 lg:border-b-0",
                index === 2 && "md:border-b-0",
                (index === 0 || index === 2) && "md:border-r-4",
                index === 1 && "lg:border-r-4"
              )}
            >

              <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-2">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs font-bold text-ink uppercase tracking-widest bg-accent text-canvas px-2 py-1 border-2 border-ink">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
