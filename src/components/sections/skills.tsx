'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GitMerge, Database, DatabaseZap } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


const skills = [
  {
    name: 'JavaScript',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.276c.895 1.563-2.21 3.72-3.698 3.72-1.21 0-2.13-1.01-2.13-2.288 0-1.28.948-1.944 2.13-1.944.735 0 1.28.36 1.638.936.216.36.36.72.36 1.152 0 .36-.144.792-.36 1.152zm-3.888-2.52c0-2.88-2.232-3.744-3.528-3.744-1.296 0-2.304.864-2.304 2.016 0 1.224.936 1.944 2.232 1.944 1.296 0 2.232-.648 3.168-1.656.36.648.576 1.296.576 2.16 0 2.232-1.728 3.6-4.248 3.6-2.448 0-4.032-1.44-4.032-3.744 0-2.448 1.656-3.744 4.032-3.744 1.224 0 2.448.576 3.312 1.152zM10.12 18.204c0-2.16-1.512-3.528-3.384-3.528-1.944 0-3.312 1.368-3.312 3.528 0 2.16 1.368 3.528 3.312 3.528 1.872 0 3.384-1.368 3.384-3.528zm-4.464.072c0-1.224.72-2.16 1.656-2.16.936 0 1.656.936 1.656 2.16 0 1.224-.72 2.16-1.656 2.16-.936 0-1.656-.936-1.656-2.16z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0 h21 A 1.5 1.5 0 0 1 24 1.5 v21 A 1.5 1.5 0 0 1 22.5 24 h-21 A 1.5 1.5 0 0 1 0 22.5 v-21 A 1.5 1.5 0 0 1 1.5 0 Z M 12.5 13.7 h-2 v-1.4 h4.8 v1.4 h-2 v6.1 h-0.8 Z M 12.1 11.4 c 0.5 -0.5 0.8 -1.1 0.8 -1.8 c 0 -1.5 -1.2 -2.7 -2.9 -2.7 h -3.5 v 7 h 0.8 v-2.9 h 2.7 c 1.4 0 2.5 1 2.5 2.2 c 0 0.6 -0.2 1.1 -0.5 1.5 l 1.9 1.9 c 0.7 -0.8 1.1 -1.9 1.1 -3.1 c 0 -1.4 -0.5 -2.7 -1.4 -3.6 Z m -3 -0.6 h 1.8 c 1.1 0 1.9 -0.8 1.9 -1.8 s -0.8 -1.8 -1.9 -1.8 h -1.8 Z" />
      </svg>
    ),
  },
  {
    name: 'React',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="2.1" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5-2.46-5.5-5.5-5.5z" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(-60 12 12)" />
        <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(60 12 12)" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.14 15.65V8.35h1.7v6.83l4.5-6.83h1.84V15.7h-1.7V8.87l-4.5 6.83h-1.84z" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.248 1.303a.499.499 0 0 1 .504 0l9.33 5.388a.5.5 0 0 1 .252.434v10.77a.5.5 0 0 1-.252.434l-9.33 5.388a.499.499 0 0 1-.504 0l-9.33-5.388a.5.5 0 0 1-.252-.434V7.125a.5.5 0 0 1 .252-.434l9.33-5.388zM12 2.697l-8.33 4.81v9.618l8.33 4.81 8.33-4.81V7.507l-8.33-4.81zm-4.144 8.243l.81.433 2.193-1.205v-2.12l-2.99 1.636v1.256zm.262 1.347l2.88 1.644v2.09l-3.003-1.758-.02-.012-.008-.005v-1.959zm4.316 1.706l2.18-1.23v-2.11l-2.18 1.23v2.11zm-1.09-3.328l2.99-1.636v-1.256l-2.99 1.636v1.256z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 3.5c1.1 0 2 .9 2 2v1h-4v-1c0-1.1.9-2 2-2zm1 13c-1.1 0-2-.9-2-2v-1h4v1c0 1.1-.9 2-2 2zm-4.46-7.54c.29-.29.68-.46 1.1-.46h4.72c.42 0 .81.17 1.1.46.58.58.58 1.54 0 2.12l-2.08 2.08c-.29.29-.68.46-1.1.46H6.54c-.42 0-.81-.17-1.1-.46-.58-.58-.58-1.54 0-2.12l2.08-2.08zm8.92 0c.58-.58.58-1.54 0-2.12l-2.08-2.08c-.29-.29-.68-.46-1.1-.46H9.54c-.42 0-.81.17-1.1.46-.58.58-.58 1.54 0 2.12l2.08 2.08c.29.29.68.46 1.1.46h4.72c.42 0 .81-.17 1.1-.46z" />
      </svg>
    ),
  },
  { name: 'SQL', icon: <Database /> },
  { name: 'NoSQL', icon: <DatabaseZap /> },
  {
    name: 'Docker',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.997 12.51a3.46 3.46 0 00-3.34-3.415h-1.696a.347.347 0 01-.347-.348V7.051a.347.347 0 01.347-.347h1.696a.348.348 0 00.347-.348V4.659a.348.348 0 00-.347-.348h-1.696a.348.348 0 00-.348-.348V2.267a.348.348 0 00-.347-.348h-1.696a.348.348 0 00-.348-.347H3.416a3.473 3.473 0 00-3.41 3.46v9.878a3.47 3.47 0 003.41 3.46h16.12a3.46 3.46 0 003.46-3.415v-1.154a1.15 1.15 0 00-1.147-1.154h-1.155a1.15 1.15 0 00-1.154 1.154v1.154a1.15 1.15 0 01-1.154 1.154H3.416a1.15 1.15 0 01-1.15-1.154V5.454a1.15 1.15 0 011.15-1.15h11.564v1.696a.347.347 0 00.347.347h1.696a.347.347 0 00.347.348v1.695a.348.348 0 00.348.348h1.695a.348.348 0 01.348.347v1.696z" />
      </svg>
    ),
  },
  { name: 'Git', icon: <GitMerge /> },
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

const coursework = ['Data Structures & Algorithms', 'Machine Learning', 'Database Systems', 'Web Development', 'Operating Systems'];

const strengths = ['Soft Skills', 'Event Management', 'Leadership (Class CR)'];

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
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div variants={itemVariants}>
            <Card>
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
                              <div className="w-8 h-8 text-muted-foreground">
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
          <motion.div variants={itemVariants}>
            <Card>
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
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Relevant Coursework</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {coursework.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {strengths.map((strength) => (
                    <li key={strength}>{strength}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
