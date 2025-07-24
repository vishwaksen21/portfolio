'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
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
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 7.5c1.1 0 2 .9 2 2v1H6.5v-1c0-1.1.9-2 2-2zm7 9c-1.1 0-2-.9-2-2v-1h4v1c0 1.1-.9 2-2 2zm-4.46-4.54c.29-.29.68-.46 1.1-.46h4.72c.42 0 .81.17 1.1.46.58.58.58 1.54 0 2.12l-2.08 2.08c-.29.29-.68.46-1.1.46H6.54c-.42 0-.81-.17-1.1-.46-.58-.58-.58-1.54 0-2.12l2.08-2.08zm4.46-5.42l2.08 2.08c.58.58.58 1.54 0 2.12-.29.29-.68.46-1.1.46H9.54c-.42 0-.81-.17-1.1-.46-.58-.58-.58-1.54 0-2.12l2.08-2.08c.29-.29.68-.46 1.1-.46h4.72c.42 0 .81.17 1.1.46z"/>
      </svg>
    ),
  },
  {
    name: 'C',
    icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M14.904 4.173c-2.313 1.12-3.899 3.52-3.899 6.223v3.208c0 2.704 1.586 5.103 3.899 6.223.772.374 1.895.16 2.4-.645.506-.806.23-1.874-.58-2.323-1.03-.49-1.724-1.51-1.724-2.65v-1.21c0-1.14.693-2.16 1.724-2.65.81-.448 1.087-1.517.58-2.323-.503-.805-1.627-1.02-2.4-.645zm-4.49 1.41C6.98 7.423 5.34 9.92 5.34 12.004c0 2.083 1.638 4.58 5.074 6.42.808.43 1.84.194 2.3-.62.46-.814.16-1.85-.66-2.29-2.22-1.2-3.71-2.69-3.71-4.04s1.49-2.84 3.71-4.04c.82-.44 1.12-1.476.66-2.29-.46-.814-1.492-1.05-2.3-.62z"/>
        </svg>
    ),
  },
  {
    name: 'Java',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M12.016 8.87a3.492 3.492 0 0 0-3.483 3.496c0 .8.27 1.52.716 2.08l-1.43 1.432a5.485 5.485 0 0 1-1.192-3.512c0-3.03 2.454-5.483 5.484-5.483a5.485 5.485 0 0 1 5.04 3.496l-1.53.86a3.486 3.486 0 0 0-3.605-2.37zm5.55 4.572c-.895.492-1.594 1.344-1.9 2.37H8.344c.306-1.026 1-1.878 1.898-2.37h7.318zm-1.898 3.515h-3.52V22h-1.92v-5.043H6.628c-.46 0-.82-.36-.82-.818V9.177c0-.46.36-.82.82-.82h10.744c.46 0 .82.36.82.82v6.945c0 .46-.36.818-.82.818z"/>
      </svg>
    ),
  },
  { 
    name: 'SQL', 
    icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M20.25 7.5a.75.75 0 0 0-.75-.75H4.5a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V7.5zM4.5 13.5h15a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 0-.75-.75H4.5a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75zM3.75 3A.75.75 0 0 0 3 3.75v16.5a.75.75 0 0 0 .75.75h16.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75H3.75zM4.5 5.25h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1 0-1.5zM4.5 18.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1 0-1.5z"/>
        </svg>
    )
  },
  { 
    name: 'NoSQL', 
    icon: (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4v-2h2v2h-2zm0-4V7h2v2h-2z"/>
        </svg>
    )
  },
  {
    name: 'Django',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <path d="M0 16.13V7.87L5.33 2h7.34l-3.67 7.47 3.67 7.47H7.34L3.67 13.8L0 16.13M24 .002v24H0V.002h24zM1.5 16.5v-9l4-6.93h6.63L8.8 8.04l3.33 6.8h-4.3L4.9 9.87l-2.07 3.57.9 1.56.67 1.5z"/>
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
                           <div className="w-16 h-16 flex items-center justify-center bg-muted/50 rounded-lg transition-all duration-300 hover:bg-muted hover:scale-110 cursor-pointer p-2">
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
