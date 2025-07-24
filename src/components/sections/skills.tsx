'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Database, DatabaseZap, BrainCircuit, Code } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


const skills = [
  {
    name: 'Python',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 3.5c1.1 0 2 .9 2 2v1h-4v-1c0-1.1.9-2 2-2zm1 13c-1.1 0-2-.9-2-2v-1h4v1c0 1.1-.9 2-2 2zm-4.46-7.54c.29-.29.68-.46 1.1-.46h4.72c.42 0 .81.17 1.1.46.58.58.58 1.54 0 2.12l-2.08 2.08c-.29.29-.68.46-1.1-.46H6.54c-.42 0-.81-.17-1.1-.46-.58-.58-.58-1.54 0-2.12l2.08-2.08zm8.92 0c.58-.58.58-1.54 0-2.12l-2.08-2.08c-.29-.29-.68-.46-1.1-.46H9.54c-.42 0-.81.17-1.1.46-.58.58-.58 1.54 0 2.12l2.08 2.08c.29.29.68.46 1.1.46h4.72c.42 0 .81-.17 1.1-.46z" />
      </svg>
    ),
  },
  {
    name: 'C',
    icon: <Code />,
  },
  {
    name: 'Java',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-0.01 15.5c-3.03 0-5.5-2.47-5.5-5.5 0-1.42.54-2.73 1.45-3.74l1.41 1.41C8.55 10.4 8.5 11.2 8.5 12c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.8-.15-1.56-.4-2.24l1.41-1.41c.91 1.01 1.45 2.32 1.45 3.65 0 3.03-2.47 5.5-5.5 5.5z" />
      </svg>
    ),
  },
  { name: 'SQL', icon: <Database /> },
  { name: 'NoSQL', icon: <DatabaseZap /> },
  {
    name: 'Django',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.67 4.5H9.13L12 10.33l-2.87 5.83H12l5.5-11.16h-3.83M8.13 4.5H3.67L12 20.33h4.46L8.13 4.5z" />
      </svg>
    ),
  },
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
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
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
                           <div className="w-16 h-16 flex items-center justify-center bg-muted/50 rounded-lg transition-all duration-300 hover:bg-muted hover:scale-110 cursor-pointer">
                              <div className="w-8 h-8 text-muted-foreground fill-current">
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
