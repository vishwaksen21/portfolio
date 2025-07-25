
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Coffee, Database, DatabaseZap, FileCode, Server } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


const skills = [
  { name: 'Python', icon: <FileCode /> },
  { name: 'C', icon: <Code /> },
  { name: 'Java', icon: <Coffee /> },
  { name: 'SQL', icon: <Database /> },
  { name: 'NoSQL', icon: <DatabaseZap /> },
  { name: 'Django', icon: <Server /> },
  { name: 'Machine Learning', icon: <BrainCircuit /> },
];


const certifications = [
  {
    title: 'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
    issuer: 'Stanford University',
    url: 'https://www.coursera.org/account/accomplishments/verify/1X2821Y190IK',
  },
  {
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    url: 'https://www.coursera.org/account/accomplishments/verify/1X2821Y190IK',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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


export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-16 sm:py-20 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">MY ABILITIES</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Skills & Expertise
          </h2>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-1 lg:grid-cols-2"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                           <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-muted/50 rounded-lg transition-all duration-300 hover:bg-muted hover:scale-110 cursor-pointer p-2">
                              <div className="w-full h-full text-muted-foreground">
                                {skill.icon}
                              </div>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className='h-full'>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div key={cert.title}>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                        {cert.title}
                      </a>
                    ) : (
                      <p className="font-semibold">{cert.title}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
