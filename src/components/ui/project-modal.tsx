'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import type { Project } from '@/components/sections/portfolio';
import { Badge } from '@/components/ui/badge';

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
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
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
               <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                data-ai-hint={project['data-ai-hint']}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold font-headline mb-2">{project.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{project.category}</p>
              
              <p className="text-foreground/80 mb-6">{project.description}</p>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
