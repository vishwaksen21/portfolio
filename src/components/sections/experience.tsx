'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Intern',
    company: 'ISRO - Sriharikota',
    period: 'Jun 2025 - Aug 2025',
    duration: '3 Months',
    location: 'Sriharikota, India',
    type: 'Internship',
    description: [
      'Developed ML project on meteorological datasets, improving model accuracy by 12%',
      'Designed ML pipelines for data processing and evaluation',
      'Rated "Very Good" by ISRO Group Director, MSG Division',
    ],
  },
  {
  role: 'Software Intern',
  company: 'Quabyt Technologies',
  period: 'Sep 2025 - Dec 2025',
  duration: '4 Months',
  location: 'India',
  type: 'Internship',
  description: [
    'Selected for a Software Intern role at Quabyt Tech',
    'Contributed to innovative software development projects with cross-functional teams',
    'Gained hands-on experience working with industry professionals and mentors',
    'Participated in training and development programs to strengthen technical and professional skills',
  ],
},
  {
    role: 'Technical Lead',
    company: 'Center for Cognitive Activities - CMRIT',
    period: 'Apr 2025 - Present',
    duration: '8+ Months',
    location: 'Bengaluru, India',
    type: 'Leadership',
    description: [
      'Leading technical team for college-wide events',
      'Managed logistics for Express & Impress and MindSpeak',
    ],
  },
  {
    role: 'Event Management Head',
    company: 'Innovation Club - CMRIT',
    period: 'Jan 2025 - Present',
    duration: '11+ Months',
    location: 'Bengaluru, India',
    type: 'Leadership',
    description: [
      'Planning innovation-focused activities and workshops',
      'Organizing technical sessions for skill development',
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-muted shadow-lg mb-6">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-base text-muted-foreground font-medium">{exp.company}</p>
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span className="font-medium text-primary">{exp.duration}</span>
                        </div>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-muted rounded-full text-foreground">
                      {exp.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">▸</span>
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
