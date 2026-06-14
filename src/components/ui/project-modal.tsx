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
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-paper border-4 border-ink shadow-blueprint w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-secondary hover:text-accent transition-colors z-20 bg-canvas border-2 border-ink p-1"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col h-full">
            <div className="w-full p-6 md:p-10 flex flex-col relative">
              <div className="absolute top-0 left-0 bg-accent text-canvas text-[10px] font-bold tracking-widest uppercase py-1 px-3 border-b-2 border-r-2 border-ink">
                Project {project.id < 10 ? `0${project.id}` : project.id}
              </div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                {project.category}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink uppercase leading-tight mb-6">{project.title}</h2>
              
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-widest uppercase text-ink border-b-2 border-ink pb-1 mb-3 inline-block">Executive Summary</h3>
                <p className="text-ink-secondary font-medium leading-relaxed">{project.description}</p>
              </div>

              {((project as any).problem || (project as any).solution) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {(project as any).problem && (
                    <div>
                      <h3 className="text-[10px] font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-1 mb-2 inline-block">The Problem</h3>
                      <p className="text-xs text-ink-secondary font-medium leading-relaxed">
                        {(project as any).problem}
                      </p>
                    </div>
                  )}
                  {(project as any).solution && (
                    <div>
                      <h3 className="text-[10px] font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-1 mb-2 inline-block">The Solution</h3>
                      <p className="text-xs text-ink-secondary font-medium leading-relaxed">
                        {(project as any).solution}
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-ink border-b-2 border-ink pb-1 mb-3 inline-block">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-ink-secondary font-medium">
                        <span className="text-accent mr-2 mt-0.5">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xs font-bold tracking-widest uppercase text-ink border-b-2 border-ink pb-1 mb-3 inline-block">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold tracking-widest uppercase text-ink border border-ink/40 px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto pt-6 border-t-2 border-ink/20 flex flex-col sm:flex-row gap-4">
                {project.link && (
                  <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full h-14 rounded-none border-2 border-ink bg-ink text-canvas hover:bg-canvas hover:text-ink transition-colors font-bold tracking-widest uppercase text-xs">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full h-14 rounded-none border-2 border-ink bg-canvas text-ink hover:bg-ink hover:text-canvas transition-colors font-bold tracking-widest uppercase text-xs">
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
