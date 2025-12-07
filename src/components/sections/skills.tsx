
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
  { name: 'C++', icon: <Code /> },
  { name: 'C', icon: <Code /> },
  { name: 'Java', icon: <Coffee /> },
  { name: 'SQL', icon: <Database /> },
  { name: 'HTML5', icon: <FileCode /> },
  { name: 'CSS3', icon: <FileCode /> },
  { name: 'JavaScript', icon: <FileCode /> },
  { name: 'React.js', icon: <Server /> },
  { name: 'Node.js', icon: <Server /> },
  { name: 'MySQL', icon: <Database /> },
  { name: 'MongoDB', icon: <DatabaseZap /> },
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
    url: 'https://www.coursera.org/account/accomplishments/verify/5JHLC2DU0J1K',
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
      className="py-20 sm:py-24 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">My Abilities</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
            Skills & Expertise
          </h2>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className='border-muted shadow-lg'>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                           <div className="flex flex-col items-center justify-center gap-2 w-20 h-20 sm:w-24 sm:h-24 bg-muted/30 rounded-xl transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 cursor-pointer p-3 border border-muted">
                              <div className="w-8 h-8">
                                {skill.icon}
                              </div>
                              <span className="text-xs font-medium text-center">{skill.name}</span>
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
        </motion.div>
      </div>
    </motion.section>
  );
}
