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
    title: 'AI Portfolio Optimizer',
    category: 'Web Development',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "web development",
    description: 'A web application that uses generative AI to analyze a user\'s portfolio and provide suggestions for improvement. Built with Next.js, Genkit, and ShadCN UI.',
    technologies: ['Next.js', 'TypeScript', 'Genkit', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "e-commerce",
    description: 'A full-featured e-commerce platform with a custom CMS, payment gateway integration, and a responsive design. The platform is built to be scalable and secure.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Data Science Dashboard',
    category: 'Data Science',
    image: 'https://placehold.co/600x400.png',
    "data-ai-hint": "dashboard analytics",
    description: 'An interactive dashboard for visualizing complex datasets. Includes features like real-time data updates, custom charting, and data filtering.',
    technologies: ['Python', 'Pandas', 'Plotly Dash', 'SQL'],
  },
];

export type Project = (typeof projects)[0];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portfolio" className="py-24 sm:py-32 bg-background">
        <div className="container px-4 mx-auto md:px-6">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">MY WORK</p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of the projects I'm proud of. Each one demonstrates my skills in turning ideas into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.id}
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
          </div>
        </div>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
