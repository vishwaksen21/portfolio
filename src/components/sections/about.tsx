
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
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">Professional Summary</p>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl px-4">
            About Me
          </h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-4 font-medium">
            Full Stack Developer | AI/ML Enthusiast | ISRO Intern | 9.12 CGPA
          </p>
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl w-48 sm:w-64 md:w-80 lg:max-w-sm mx-auto">
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
                  Computer Science student specializing in Data Science with strong programming and problem-solving skills. 
                  Passionate about leveraging technology to solve real-world challenges through machine learning and full-stack development.
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Maintaining a CGPA of 9.12/10 at CMR Institute of Technology with expertise in Python, C++, Java, 
                and modern web technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
