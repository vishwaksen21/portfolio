
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '7+',
    label: 'Projects Completed',
  },
  {
    value: '9.12',
    label: 'CGPA',
  },
  {
    value: '1',
    label: 'Internship',
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
      className="py-12 sm:py-16 md:py-20"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 gap-8 sm:gap-6 xs:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
