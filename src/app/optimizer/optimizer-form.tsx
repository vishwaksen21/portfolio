'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { runPortfolioOptimizer } from '@/lib/actions';

const PortfolioOptimizerInputSchema = z.object({
  portfolioDescription: z
    .string()
    .min(50, 'Please provide a detailed description of at least 50 characters.')
    .describe('A detailed description of the current portfolio, including the type of work, target audience, and any specific design choices.'),
  designGoals: z
    .string()
    .min(10, 'Please describe your goals in at least 10 characters.')
    .describe('Specific goals for the portfolio, such as increasing views, attracting specific clients, or improving engagement.'),
});

type PortfolioOptimizerInput = z.infer<typeof PortfolioOptimizerInputSchema>;

type PortfolioOptimizerOutput = {
  suggestions: {
    suggestion: string;
    confidence: number;
    reasoning: string;
  }[];
};

export default function OptimizerForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PortfolioOptimizerOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<PortfolioOptimizerInput>({
    resolver: zodResolver(PortfolioOptimizerInputSchema),
    defaultValues: {
      portfolioDescription: '',
      designGoals: '',
    },
  });

  async function onSubmit(values: PortfolioOptimizerInput) {
    setLoading(true);
    setResult(null);

    const { data, error } = await runPortfolioOptimizer(values);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error,
      });
    } else {
      setResult(data);
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="portfolioDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Portfolio Description</FormLabel>
                    <FormDescription>
                      Describe your current portfolio in detail. Mention the type of work, target audience, and design choices.
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., My portfolio showcases my web development projects, focusing on minimalist e-commerce sites for startups..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="designGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Design Goals</FormLabel>
                    <FormDescription>
                      What are your specific goals? (e.g., increase freelance inquiries, attract tech recruiters, etc.)
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I want to attract more corporate clients and showcase my ability to handle large-scale projects."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={loading} className="w-full" size="lg">
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {loading ? 'Analyzing...' : 'Get Suggestions'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {result && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">AI-Powered Suggestions</h2>
          <div className="space-y-6">
            {result.suggestions.map((item, index) => (
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <CardTitle>{item.suggestion}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Reasoning</h3>
                    <p className="text-muted-foreground">{item.reasoning}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Confidence Score: {Math.round(item.confidence * 100)}%</h3>
                    <Progress value={item.confidence * 100} className="h-2 [&>div]:bg-gradient-to-r from-primary to-accent" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
