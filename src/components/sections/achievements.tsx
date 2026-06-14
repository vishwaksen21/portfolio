'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trophy, Code, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    category: 'Achievements',
    items: [
      'Winner - Mind-Speak: A Battle of Perspectives, CMRIT Placement Department',
      'Winner - Full-Stack Odyssey Hackathon, CMRIT 2025',
      '3rd place - Plot and Cast Event, Convergence 2024',
      'Maintained 33+ GitHub repositories and made 880+ contributions',
      'Recognized for Active Participation - Google Student Ambassador Program (Gemini), 2025',
      'Selected - IIT Bombay\'s Techfest 2025-26 College Ambassador, 2025',
    ],
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    category: 'Hackathons',
    items: [
      'Adobe India Hackathon (2025) - Competitor',
      'Full-Stack Fiesta 2025 at CMRIT - Participant',
      'Google Agentic AI Hackathon, 2025 - Participant',
      'Smart India Hackathon, 2025 and 2026 - Participant',
      'Byte Battle 1.0 -DSA Hackathon, 2025 - Competitor',
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    category: 'Leadership & Responsibilities',
    items: [
      'Student Placement Coordinator - CMRIT',
      'Organized The Social Hackathon\'26 - 1000+ registrations',
      'Active Peer Learning Team (PLT) member - CMRIT',
      'Coordinated in Department-Level Events and Drives - CMRIT',
      'Class Representative - 3rd, 4th, 5th semester',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Achievements() {
  return (
    <motion.section
      id="achievements"
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
            Milestones
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievementsData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-2 md:border-4 border-ink bg-paper p-4 md:p-6 shadow-blueprint relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-2 right-2 text-[10px] font-bold tracking-widest uppercase text-ink">
                Vol. {index + 1}
              </div>
              
              <div className="flex items-center gap-3 mb-6 border-b-2 border-ink pb-4">
                <div className="text-accent">
                  {section.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-ink uppercase tracking-tight">
                  {section.category}
                </h3>
              </div>
              
              <div className="flex-grow">
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-1 border-b border-ink/20 pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-bold tracking-widest text-ink">
                        {item.split(' - ')[0] || item.split(' at ')[0] || item}
                      </span>
                      {(item.includes(' - ') || item.includes(' at ')) && (
                        <span className="text-[10px] tracking-widest uppercase text-ink-secondary">
                          {item.includes(' - ') ? item.split(' - ')[1] : item.split(' at ')[1]}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
