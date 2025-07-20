
'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles, TrendingUp } from 'lucide-react';
import { optimizePortfolio, OptimizePortfolioInput, OptimizePortfolioOutput } from '@/ai/flows/optimizer-flow';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  goals: z.string().min(10, 'Please describe your career goals in a bit more detail.'),
  currentWork: z.string().min(20, 'Please provide more details about your current projects. Separate each project with a new line.'),
});

type FormData = z.infer<typeof formSchema>;

export default function OptimizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<OptimizePortfolioOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals: '',
      currentWork: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await optimizePortfolio(data);
      setResult(response);
    } catch (error) {
      console.error('Error optimizing portfolio:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get optimization suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl py-12">
      <Card className="border-0 shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold">AI Portfolio Optimizer</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Get personalized suggestions and analyze your project's trend score.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">What are your career goals?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Land a frontend developer role at a tech startup'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentWork"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Describe your portfolio projects.</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe each project in your portfolio on a new line, including the technologies used."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-center">
                <Button type="submit" disabled={isLoading} size="lg">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    'Get Suggestions'
                  )}
                </Button>
              </div>
            </form>
          </Form>

          {result && (
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-12 space-y-8"
             >
                {result.projectAnalyses && result.projectAnalyses.length > 0 && (
                 <Card>
                   <CardHeader>
                     <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6" />
                        <CardTitle>Project Trend Analysis</CardTitle>
                     </div>
                     <CardDescription>How your projects align with current industry trends.</CardDescription>
                   </CardHeader>
                   <CardContent className="space-y-6">
                     {result.projectAnalyses.map((analysis, index) => (
                       <div key={index}>
                         <div className="flex justify-between items-center mb-1">
                           <h3 className="font-semibold text-lg">{analysis.projectName}</h3>
                           <span className="font-bold text-lg text-primary">{analysis.trendScore}/10</span>
                         </div>
                         <Progress value={analysis.trendScore * 10} className="h-2" />
                         <p className="text-sm text-muted-foreground mt-2">{analysis.justification}</p>
                       </div>
                     ))}
                   </CardContent>
                 </Card>
                )}

              <Card>
                <CardHeader>
                  <CardTitle>Your Personalized Suggestions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Project Suggestions</h3>
                    <p className="text-muted-foreground">{result.projectSuggestions}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Skills to Highlight</h3>
                    <p className="text-muted-foreground">{result.skillsToHighlight}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Presentation Tips</h3>
                    <p className="text-muted-foreground">{result.presentationTips}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
