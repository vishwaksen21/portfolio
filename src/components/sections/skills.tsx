
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BrainCircuit, Code, Coffee, Database, DatabaseZap, FileCode, Server } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';


const categorizedSkills = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "C"]
  },
  {
    category: "Machine Learning & AI",
    skills: ["TensorFlow", "scikit-learn", "Ollama", "Local LLMs", "AI Model Integration"]
  },
  {
    category: "Data Analysis & Visualization",
    skills: ["Pandas", "NumPy", "Power BI", "Tableau", "Excel", "Data Cleaning", "EDA"]
  },
  {
    category: "Web Development",
    skills: ["Flask", "Streamlit", "REST APIs"]
  },
  {
    category: "Databases & Querying",
    skills: ["MySQL (SQL)", "MongoDB", "Firebase"]
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "Visual Studio Code", "Antigravity IDE"]
  },
  {
    category: "Core CS",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"]
  }
];

export function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="py-12 md:py-16 lg:py-20 bg-paper border-b-4 border-ink relative"
    >
      <div className="absolute inset-0 bg-blueprint opacity-50 pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="flex items-center gap-3 mb-6 md:mb-16">
          <div className="h-3 w-3 bg-accent"></div>
          <h2 className="font-display text-xl md:text-5xl lg:text-6xl font-bold tracking-normal text-ink uppercase">
            Technical&nbsp;Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categorizedSkills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border-2 md:border-4 border-ink bg-canvas p-4 md:p-6 shadow-blueprint flex flex-col relative hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-accent border-b-2 border-ink pb-2 mb-6">
                {category.category}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 border-b border-ink/20 pb-2 last:border-0 last:pb-0">
                    <span className="w-1.5 h-1.5 bg-ink" />
                    <span className="text-ink text-sm font-bold tracking-widest uppercase">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
