
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ProjectModal } from '@/components/ui/project-modal';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: 'Club Website Development',
    category: 'Web Development',
    image: '/club-website.png',
    'data-ai-hint': 'college club website',
    link: 'https://cca-cmrit.vercel.app',
    github: 'https://github.com/vishwaksen21/CCA-WEBSITE',
    description:
      'Official website for Centre For Cognitive Activities (CCA) at CMRIT showcasing events and achievements.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'],
    highlights: [
      'Responsive design for all devices',
      'Optimized performance and navigation',
      'Dynamic content sections',
    ],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    category: 'Web Development',
    image: '/portfolio-project.png',
    'data-ai-hint': 'personal portfolio',
    link: 'https://vishwaksen.vercel.app',
    github: 'https://github.com/vishwaksen21/portfolio',
    description:
      'Professional portfolio showcasing projects and achievements with modern UI/UX, animations, and SEO optimization.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    highlights: [
      'Smooth animations and interactive components',
      'SEO and performance optimized',
      'Fully responsive design',
    ],
  },
  {
    id: 3,
    title: 'Billing Management System',
    category: 'Software Development',
    image: '/billing.png',
    'data-ai-hint': 'billing software',
    github: 'https://github.com/vishwaksen21/Billing-System-with-MySQL-and-Tkinter',
    description:
      'Java-based billing system for automated invoicing, payment tracking, and financial reporting.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'JFrame'],
    highlights: [
      'Intuitive GUI with Java Swing',
      'Robust MySQL database design',
      'Automated billing and reporting',
    ],
  },
  {
    id: 4,
    title: 'Student Management System',
    category: 'Software Development',
    image: '/student-management.png',
    'data-ai-hint': 'student database',
    github: 'https://github.com/vishwaksen21/Student-Management-System',
    description:
      'Python desktop app with Tkinter GUI for managing student records with MySQL database integration.',
    technologies: ['Python', 'Tkinter', 'MySQL'],
    highlights: [
      'User-friendly dashboards and search',
      'CRUD operations with validation',
      'Fee and marks management modules',
    ],
  },
  {
    id: 5,
    title: 'Automated Face Recognition Attendance System',
    category: 'Machine Learning',
    image: '/attendance.png',
    'data-ai-hint': 'face recognition attendance',
    github: 'https://github.com/vishwaksen21/Automated-attendance',
    description:
      'Face recognition system to automate student attendance with real-time detection and CSV report generation.',
    technologies: ['Python', 'OpenCV', 'Tkinter', 'NumPy', 'Pandas'],
    highlights: [
      'Real-time face detection and recognition',
      'Automated CSV-based attendance reports',
      'GUI for registration and record viewing',
    ],
  },
  {
  id: 6,
  title: 'Cure-Blend',
  category: 'AI & ML Development',
  image: '/CureBlend.png',
  'data-ai-hint': 'medical recommendation system',
  github: 'https://github.com/vishwaksen21/Cure-Blend',
  description:
    'An AI-powered system that predicts diseases from symptoms and provides blended herbal and pharmaceutical treatment suggestions.',
  technologies: [
    'Python','Machine Learning','Streamlit','Scikit-learn','Pandas',
  ],
  highlights: [
    'Symptom-based disease prediction using ML models',
    'Dual treatment recommendations with safety notes',
    'Explainability insights for model predictions',
    'Clean and interactive Streamlit UI'
  ],
}
];

export type Project = (typeof projects)[0];

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

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
  exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
};

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="py-20 sm:py-24 bg-muted/30"
      >
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">My Work</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
              Featured Projects
            </h2>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Here are some of the projects I'm proud of. Each one demonstrates my skills in turning ideas into
              reality.
            </p>
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit="exit"
                  layoutId={`card-${project.id}`}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <Card className="overflow-hidden h-full group hover:shadow-xl transition-all duration-300 border-muted">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden aspect-video">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          loading="lazy"
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={project['data-ai-hint']}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <div className="p-6 bg-card">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
}
