'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectModal } from '@/components/ui/project-modal';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Billing Management System',
    category: 'Software Development',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'billing software',
    description:
      'A comprehensive billing management system designed to streamline invoicing and payment processing. Features include automated billing, customer management, and detailed financial reporting.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC'],
  },
  {
    id: 2,
    title: 'Pulsar & Non-Pulsar Detection',
    category: 'Machine Learning',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'space astronomy',
    description:
      'A machine learning model developed to classify celestial objects as pulsars or non-pulsars based on radio telescope data. Achieved high accuracy using various classification algorithms.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
  },
  {
    id: 3,
    title: 'Student Management System',
    category: 'Web Development',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'student database',
    description:
      'A web-based application to manage student records, including personal details, academic performance, and attendance. Built with a user-friendly interface for administrators and faculty.',
    technologies: ['PHP', 'HTML', 'CSS', 'MySQL'],
  },
];

export type Project = (typeof projects)[0];

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

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="py-16 sm:py-20 bg-background"
      >
        <div className="container px-4 mx-auto md:px-6">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">MY WORK</p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I'm proud of. Each one demonstrates my skills in turning ideas into
              reality.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layoutId={`card-${project.id}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden h-full group">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover w-full h-auto"
                        data-ai-hint={project['data-ai-hint']}
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.category}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
}
