'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Diamond } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'CMR Institute Of Technology',
    degree: "Bachelor of Engineering – Computer Science Engineering - Data Science",
    specialization: 'Data Science',
    years: 'Sep 2023 - Jul 2027 (Pursuing)',
    location: 'AECS Layout, Bangalore',
    gpa: 'CGPA: 9.12/10',
    achievements: [
      'Expected graduation: 2027',
      'Specialized in Data Science and Machine Learning',
      'Active participation in technical events and coding competitions',
      'Served as Class Representative in the 4th & 5th semester',
    ],
  },
  {
    institution: 'Vasishta PU College',
    degree: 'Pre-University Course - Science',
    years: '2021 - 2023',
    location: 'Ballari',
    gpa: 'Percentage: 92.16%',
    achievements: [
      'Strong foundation in Mathematics and Computer Science',
      'Developed early interest in programming and problem-solving',
    ],
  },
  {
    institution: 'Dream World School',
    degree: '10th Standard - CBSE',
    years: '2021',
    location: 'Ballari',
    gpa: 'Percentage: 78.02%',
    achievements: [
      'Completed secondary education with focus on core subjects',
    ],
  },
];

export function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">My Journey</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">Education</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="border-muted shadow-lg">
            <CardContent className="p-4 md:p-6">
              {educationData.map((edu, index) => (
                <div key={index}>
                  <div className="flex gap-4 md:gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                      <p className="text-base text-muted-foreground font-medium mt-1">{edu.degree}</p>
                      {edu.specialization && (
                        <p className="text-sm text-muted-foreground italic">Specialization: {edu.specialization}</p>
                      )}
                      {edu.years && <p className="text-sm text-muted-foreground mt-2">{edu.years}</p>}
                      {edu.location && <p className="text-sm text-muted-foreground">{edu.location}</p>}
                      {edu.gpa && (
                        <p className="text-sm font-semibold text-primary mt-2">{edu.gpa}</p>
                      )}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground">
                              <Diamond className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {index < educationData.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
