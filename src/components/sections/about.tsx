
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">About Me</p>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl px-4">
            A Glimpse Into My World
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
                <Image
                  src="/vishwak_professional.png"
                  alt="C Vishwak Sena - Professional Photo"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 order-1 lg:order-2"
            >
              <div className="bg-muted/30 p-4 sm:p-6 rounded-xl border border-muted">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">Career Objective</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Passionate Computer Science student specializing in Data Science, with a strong foundation in 
                  programming and analytical problem-solving. I thrive in team-oriented environments, combining 
                  analytical abilities with creative thinking to drive impactful outcomes. Dedicated to continuous 
                  learning and leveraging technology to address real-world challenges.
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I am a Computer Science student specializing in Data Science at CMR Institute of Technology, 
                maintaining a CGPA of 9.12/10. With strong skills in Python, C++, Java, and web technologies, 
                I'm passionate about creating innovative solutions through software development and machine learning.
              </p>
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">What Drives Me</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Building impactful projects that solve real-world problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Continuous learning in AI, ML, and Data Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▸</span>
                    <span>Contributing to open-source and collaborative projects</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
