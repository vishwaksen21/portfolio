
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
      'Developed the official club website for Centre For Cognitive Activities (CCA) at CMRIT to showcase events, announcements, and achievements. The website features a modern, responsive design that works seamlessly across all devices, with smooth navigation and optimized performance for enhanced user experience.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js'],
    highlights: [
      'Delivered a responsive design compatible with multiple devices',
      'Deployed the website for public access and maintenance',
      'Implemented smooth navigation and optimized performance',
      'Created dynamic content sections for events and announcements',
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
      'Designed and developed a professional portfolio website to showcase projects and achievements with a focus on modern UI/UX principles. The site features smooth animations, interactive components, and is optimized for both performance and SEO to ensure faster load times and better search engine visibility.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    highlights: [
      'Implemented smooth animations and interactive UI components',
      'Optimized website performance and SEO',
      'Deployed with version control for continuous updates',
      'Created responsive design for all screen sizes',
    ],
  },
  {
    id: 3,
    title: 'Billing Management System',
    category: 'Software Development',
    image: '/billing.png',
    'data-ai-hint': 'billing software',
    description:
      'A comprehensive Java-based billing management system designed to streamline invoicing and payment processing for businesses. Features include automated billing cycles, customer data management, invoice generation, payment tracking, and detailed financial reporting with export capabilities.',
    technologies: ['Java', 'Swing', 'MySQL', 'JDBC', 'JFrame'],
    highlights: [
      'Developed intuitive GUI using Java Swing',
      'Implemented robust database design with MySQL',
      'Created automated billing and invoice generation features',
      'Built comprehensive reporting and analytics dashboard',
    ],
  },
  {
    id: 4,
    title: 'Pulsar & Non-Pulsar Detection',
    category: 'Machine Learning',
    image: '/ml.png',
    'data-ai-hint': 'space astronomy',
    description:
      'An advanced machine learning project focused on classifying celestial objects as pulsars or non-pulsars using radio telescope data. Developed a binary classification model with preprocessing, feature engineering, and training using multiple Scikit-learn algorithms including Random Forest, SVM, and Linear Regression for comparative analysis.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    highlights: [
      'Applied preprocessing and feature engineering techniques',
      'Evaluated using confusion matrix, precision, recall, and F1-score',
      'Visualized data distributions and model performance insights',
      'Experimented with multiple algorithms for comparative analysis',
    ],
  },
  {
    id: 5,
    title: 'Student Management System',
    category: 'Software Development',
    image: '/student-management.png',
    'data-ai-hint': 'student database',
    description:
      'Built a Python desktop application with Tkinter GUI to manage student records efficiently. The system integrates with MySQL database for secure storage and fast retrieval, featuring user-friendly dashboards and search functionality for efficient record management.',
    technologies: ['Python', 'Tkinter', 'MySQL'],
    highlights: [
      'Designed user-friendly dashboards and search functionality',
      'Implemented CRUD operations with input validation',
      'Integrated MySQL database for secure data storage',
      'Built fee and marks management modules',
    ],
  },
  {
    id: 6,
    title: 'Automated Face Recognition Attendance System',
    category: 'Machine Learning',
    image: '/attendance.png',
    'data-ai-hint': 'face recognition attendance',
    description:
      'Designed a face recognition system to automate student attendance tracking. The system includes modules for face capture, dataset creation, and model training, with real-time detection capabilities to generate CSV-based attendance reports. Features a simple GUI for registration, attendance marking, and record viewing.',
    technologies: ['Python', 'OpenCV', 'Tkinter', 'NumPy', 'Pandas'],
    highlights: [
      'Designed face recognition system to automate student attendance',
      'Built modules for face capture data set creation and model training',
      'Implemented real-time detection to generate CSV based attendance report',
      'Designed simple GUI for registration, attendance and record viewing',
    ],
  },
  {
    id: 7,
    title: 'BlueConnect',
    category: 'Web Development',
    image: '/BlueConnect.png',
    'data-ai-hint': 'service platform',
    description:
      'BlueConnect is an innovative platform that bridges the gap between blue-collar workers and service seekers. The application features a modern tech stack with Next.js for optimal performance, allowing workers to showcase their skills through portfolios, negotiate prices directly with clients, and manage service requests. The platform includes three distinct interfaces: admin dashboard for platform management, worker portal for service listing, and client interface for service discovery and booking.',
    technologies: ['Next.js', 'React', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Node.js'],
    highlights: [
      'Built scalable full-stack application with modern tech stack',
      'Implemented real-time price negotiation system',
      'Created role-based dashboards for three user types',
      'Designed intuitive UI/UX for seamless user experience',
    ],
  },
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
