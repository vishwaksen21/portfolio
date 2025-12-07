'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X, ExternalLink, Github } from 'lucide-react';
import type { Project } from '@/components/sections/portfolio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-background rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col">
            <div className="w-full">
               <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-t-lg object-cover w-full h-64 md:h-80"
                data-ai-hint={project['data-ai-hint']}
              />
            </div>
            <div className="w-full p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">{project.category}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">About the Project</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">{tech}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full" variant="default">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Project
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
      </motion.div>
    </motion.div>
  );
}
