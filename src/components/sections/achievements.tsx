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
      'Winner: MindSpeak - A Battle of Perspectives, CMRIT (2025)',
      '3rd Place: Plot and Cast at Convergence 2024',
      'College Ambassador - IIT Bombay Techfest 2025-26',
      'Winner: FullStack Odyssey Hackathon - CMRIT (2025)',
    ],
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    category: 'Hackathons',
    items: [
      'Techxcelerate - BITS Hyderabad (2025)',
      'Adobe India Hackathon (2025)',
      'Full Stack Fiesta - CMRIT (2025)',
      'Fullstack Odyssey - CMRIT (2025)',
      'Google Agentic AI Hackathon (2025)',
      'Smart India Hackathon (2024,2025)',
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    category: 'Leadership',
    items: [
      'Technical Team Lead - CCA (April 2025)',
      'Event Management Head - Innovation Club (2025)',
      'Class Representative - 4th & 5th Semester',
      'Event Organizer - Express & Impress, MindSpeak, DataQuest',
    ],
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    category: 'Certifications',
    items: [
      'Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)',
      'Full Stack Development - Infosys',
      'Introduction to NoSQL Databases - Infosys',
      'Divide and Conquer, Sorting and Searching, and Randomized Algorithms - Stanford University',
      'Python for Data Science, AI & Development - IBM',
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-muted/30"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">Recognition</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
            Achievements & Activities
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {achievementsData.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-muted shadow-lg h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{section.category}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <Award className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
