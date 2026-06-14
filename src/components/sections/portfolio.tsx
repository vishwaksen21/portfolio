
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
    title: 'Avelyn - AI-Powered Desktop Tool',
    category: 'AI & Machine Learning',
    image: '/avelyn.png', // Temporary placeholder until specific image is added
    'data-ai-hint': 'ai desktop text tool',
    link: 'https://avelyn.software/',
    github: 'https://github.com/vishwaksen21/Avelyn',
    description:
      'An AI-powered desktop text enhancement tool supporting multiple LLM providers and seamless cross-application text replacement via clipboard capture.',
    problem: 'Users lack a system-wide, integrated AI tool to instantly enhance, summarize, or translate text directly within any desktop application without switching contexts.',
    solution: 'Built a robust PyInstaller desktop app integrating Ollama, Gemini, and OpenAI APIs with a clipboard listener to enable instant, inline text manipulation.',
    technologies: ['Python', 'Ollama', 'OpenAI API', 'Gemini API', 'PyInstaller'],
    highlights: [
      'Cross-application text replacement',
      'Supports Gemma, Llama, OpenAI, Gemini',
      'Asynchronous performance optimizations',
    ],
  },
  {
    id: 2,
    title: 'SignAction - Translation System',
    category: 'Web Development',
    image: '/signaction.png', // Temporary placeholder
    'data-ai-hint': 'sign language translation',
    link: 'https://signaction.vercel.app/',
    github: 'https://github.com/vishwaksen21/signaction',
    description:
      'A real-time web application to convert speech and text into animated sign language gestures using an advanced NLP pipeline.',
    problem: 'Communication barriers exist for the deaf and hard-of-hearing community due to the lack of accessible, real-time sign language translation tools.',
    solution: 'Developed a robust FastAPI and Next.js stack with a 3-tier fallback mechanism (sign assets, AI animations, fingerspelling) for continuous output.',
    technologies: ['Python', 'FastAPI', 'Next.js', 'React', 'NumPy'],
    highlights: [
      'Real-time speech-to-sign conversion',
      'Custom NLP text preprocessing pipeline',
      'Innovative 3-tier fallback animation system',
    ],
  },
  {
    id: 3,
    title: 'Cure-Blend Recommendation',
    category: 'AI & ML Development',
    image: '/CureBlend.png',
    'data-ai-hint': 'medical recommendation system',
    link: 'https://cureblend.streamlit.app',
    github: 'https://github.com/vishwaksen21/Cure-Blend',
    description:
      'AI-powered disease prediction system analyzing medical records to provide dual treatment recommendations (pharmaceutical & herbal).',
    problem: 'Patients often lack immediate access to preliminary medical insights and holistic treatment options combining both pharmaceutical and herbal remedies.',
    solution: 'Engineered a machine learning predictive model utilizing TF-IDF and Logistic Regression trained on 8000+ records to suggest interactive diagnosis insights.',
    technologies: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn', 'NLP', 'TF-IDF'],
    highlights: [
      '86% prediction accuracy on 8,000+ records',
      'Suggests both herbal and pharmaceutical remedies',
      'NLP-based symptom analysis to predict 43 diseases'
    ],
  },
  {
    id: 4,
    title: 'Club Website Development',
    category: 'Web Development',
    image: '/club-website.png',
    'data-ai-hint': 'college club website',
    link: 'https://cca-cmrit.vercel.app',
    github: 'https://github.com/vishwaksen21/CCA-WEBSITE',
    description:
      'Official website for Centre For Cognitive Activities (CCA) at CMRIT serving 500+ students with event information and achievements.',
    problem: 'The club lacked a centralized platform to communicate events, showcase achievements, and manage registrations, leading to fragmented communication.',
    solution: 'Engineered a highly performant, fully responsive Next.js application with a clean UI to serve as the single source of truth for 500+ members.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'],
    highlights:
      [
        '90+ Lighthouse performance score',
        'Fully responsive across all devices',
      ],
  },
  {
    id: 5,
    title: 'Billing Management System',
    category: 'Software Development',
    image: '/billing.png',
    'data-ai-hint': 'billing software',
    github: 'https://github.com/vishwaksen21/Billing-System-with-MySQL-and-Tkinter',
    description:
      'Enterprise-grade billing system handling 1000+ transactions with automated invoicing and real-time payment tracking.',
    problem: 'Manual billing processes were error-prone, slow, and lacked proper transactional tracking and invoice generation capabilities.',
    solution: 'Developed a robust Java Swing desktop application integrated with MySQL to automate billing, track inventory, and instantly generate PDF invoices.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'JFrame'],
    highlights: [
      'Processes 1000+ billing transactions',
      'MySQL database with normalized schema',
      'Automated PDF invoice generation',
    ],
  },
  {
    id: 6,
    title: 'Face Recognition Attendance',
    category: 'Machine Learning',
    image: '/attendance.png',
    'data-ai-hint': 'face recognition attendance',
    github: 'https://github.com/vishwaksen21/Automated-attendance',
    description:
      'ML-powered attendance system achieving 95% accuracy with real-time face detection for 100+ students.',
    problem: 'Traditional roll-call attendance was time-consuming and susceptible to proxy attendance, reducing classroom efficiency.',
    solution: 'Implemented an automated attendance pipeline using OpenCV and facial recognition to accurately log students in real-time and export data to CSV.',
    technologies: ['Python', 'OpenCV', 'Tkinter', 'NumPy', 'Pandas'],
    highlights: [
      '95% face recognition accuracy',
      'Processes 100+ students in 2 minutes',
      'Automated CSV reports with timestamps',
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

  const featuredProject = projects[0];
  const supportingProjects = projects.slice(1);

  return (
    <>
      <motion.section
        id="portfolio"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-16 lg:py-20 bg-paper border-b-4 border-ink relative"
      >
        <div className="absolute inset-0 bg-blueprint opacity-30 pointer-events-none" />

        <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">

          <div className="flex items-center gap-4 mb-16">
            <div className="h-4 w-4 bg-accent"></div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink uppercase">
              Case Studies
            </h2>
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-4 border-ink bg-canvas shadow-blueprint relative group">
              <div className="absolute -top-3 -right-3 bg-accent text-canvas text-[10px] font-bold tracking-widest uppercase py-1 px-3 border-2 border-ink z-20">
                Featured 01
              </div>

              <div className="lg:col-span-7 relative border-b-4 lg:border-b-0 lg:border-r-4 border-ink overflow-hidden bg-canvas cursor-pointer min-h-[300px] lg:min-h-[450px]" onClick={() => setSelectedProject(featuredProject)}>
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/20 backdrop-blur-sm">
                  <span className="bg-canvas text-ink border-2 border-ink px-4 py-2 text-xs font-bold tracking-widest uppercase">
                    View Details
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                    {featuredProject.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-ink uppercase leading-tight mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-ink-secondary text-sm md:text-base font-medium leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-1 mb-2 inline-block">The Problem</p>
                      <p className="text-xs text-ink-secondary font-medium leading-relaxed">
                        {featuredProject.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-1 mb-2 inline-block">The Solution</p>
                      <p className="text-xs text-ink-secondary font-medium leading-relaxed">
                        {featuredProject.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-ink/20">
                  {featuredProject.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-bold tracking-widest uppercase text-ink border border-ink px-2 py-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <AnimatePresence>
              {supportingProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full border-4 border-ink bg-canvas shadow-blueprint hover:-translate-y-2 transition-transform duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] border-b-4 border-ink overflow-hidden bg-canvas">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-2 right-2 bg-paper text-ink text-[10px] font-bold tracking-widest uppercase py-1 px-2 border-2 border-ink">
                      No. 0{index + 2}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-accent mb-2">
                        {project.category}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-ink uppercase leading-tight mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-ink-secondary text-xs font-medium leading-relaxed line-clamp-3 mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-[9px] font-bold tracking-widest uppercase text-ink border border-ink/40 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </motion.section>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
}
