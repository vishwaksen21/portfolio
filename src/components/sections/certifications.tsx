'use client';

import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Python for Data Science, AI & Development',
    provider: 'IBM',
    date: '2024',
    credential: 'Certification of Completion',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
    provider: 'Oracle',
    date: '2025',
    credential: '1Z0-1122-25',
  },
  {
    title: 'Data Visualization',
    provider: 'Kaggle',
    date: '2024',
    credential: 'Certification of Completion',
  },
  {
    title: 'On-Premise Data Warehouse using BW/4HANA',
    provider: 'SAP',
    date: '2024',
    credential: 'Certification of Completion',
  },
  {
    title: 'Software Engineering Job Simulation',
    provider: 'JPMorgan Chase',
    date: '2024',
    credential: 'Job Simulation',
  },
];

export function Certifications() {
  return (
    <motion.section
      id="certifications"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-8 md:py-16 lg:py-20 bg-canvas border-b-4 border-ink relative"
    >
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />
      <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-16">
          <div className="h-3 w-3 bg-accent"></div>
          <h2 className="font-display text-xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink uppercase">
            Credentials
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 md:border-4 border-ink bg-paper p-4 md:p-6 shadow-blueprint relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >

              
              <div className="flex-grow">
                <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3 border-b-2 border-ink pb-2 inline-block">
                  {cert.provider}
                </p>
                <h3 className="font-display text-xl font-bold text-ink uppercase leading-tight mb-4 line-clamp-3">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-8 flex items-end justify-end border-t-2 border-ink pt-4">
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-ink-secondary">
                    Year
                  </p>
                  <p className="text-xs font-bold tracking-widest uppercase text-ink mt-1">
                    {cert.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
