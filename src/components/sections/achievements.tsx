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
      'Winner of MindSpeak: A Battle of Perspectives, CMRIT (2025)',
      'Secured 3rd place in the event Plot and Cast at Convergence 2024 Inter-Collegiate Mathematics',
      'Awarded Class Representative Certificate (2023–Present) for leadership',
      'Selected as College Ambassador for IIT Bombay\'s Techfest 2025-26',
      'Certified as an Active Participant in the Campus 2 Community Fellowship (Cohort 1)',
    ],
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    category: 'Hackathons',
    items: [
      'Competed in Techxcelerate (BITS Hyderabad) Hackathon, 2025',
      'Participated in Adobe India Hackathon, 2025',
      'Engaged in FullStack Fiesta 2025 at CMRIT',
      'Participated in Google Agentic AI Hackathon, 2025',
      'Participated in Smart India Hackathon, 2025',
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    category: 'Leadership & Community',
    items: [
      'Active Technical Team Member of Centre For Cognitive Activities (CCA) since April 2025',
      'Organized and conducted multiple events – Express & Impress, MindSpeak',
      'Served as Class Representative in the 4th & 5th semester',
      'College Ambassador for IIT Bombay\'s Techfest 2025-26',
    ],
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    category: 'Certifications',
    items: [
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
