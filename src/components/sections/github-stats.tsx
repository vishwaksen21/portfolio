'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Code, Flame } from 'lucide-react';

export function GitHubStats() {
  const username = 'vishwaksen21';

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-20 sm:py-24 bg-background"
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-medium text-primary tracking-wider uppercase mb-4">GitHub Activity</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl px-4">
            Contribution Graph
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My coding journey and contribution activity on GitHub
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-muted shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Github className="w-5 h-5 text-primary" />
                GitHub Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=64748b`}
                alt="GitHub Stats"
                className="w-full h-auto"
                loading="lazy"
              />
            </CardContent>
          </Card>

          <Card className="border-muted shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Top Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=64748b`}
                alt="Top Languages"
                className="w-full h-auto"
                loading="lazy"
              />
            </CardContent>
          </Card>

          <Card className="border-muted shadow-lg md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" />
                Contribution Streak
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=3b82f6&fire=3b82f6&currStreakLabel=64748b`}
                alt="GitHub Streak"
                className="w-full h-auto"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
