'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '5+',
    label: 'Academic Projects',
  },
  {
    value: '1',
    label: 'ISRO Internship',
  },
  {
    value: '9.18/10',
    label: 'GPA',
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
      className="py-16 sm:py-20"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <Card className="text-center border-0 shadow-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <p className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-base text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
