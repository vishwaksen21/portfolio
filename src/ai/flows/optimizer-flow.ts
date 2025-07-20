
'use server';
/**
 * @fileOverview A portfolio optimization AI agent.
 *
 * - optimizePortfolio - A function that provides suggestions to improve a portfolio.
 * - OptimizePortfolioInput - The input type for the optimizePortfolio function.
 * - OptimizePortfolioOutput - The return type for the optimizePortfolio function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const OptimizePortfolioInputSchema = z.object({
  goals: z.string().describe("The user's career goals."),
  currentWork: z.string().describe("A description of the user's current portfolio projects."),
});
export type OptimizePortfolioInput = z.infer<typeof OptimizePortfolioInputSchema>;

const OptimizePortfolioOutputSchema = z.object({
  projectSuggestions: z.string().describe('Suggestions for new or improved projects that align with the user goals.'),
  skillsToHighlight: z.string().describe('Key skills the user should emphasize in their portfolio.'),
  presentationTips: z.string().describe('Tips for improving the presentation of the portfolio (e.g., descriptions, layout, visuals).'),
});
export type OptimizePortfolioOutput = z.infer<typeof OptimizePortfolioOutputSchema>;

export async function optimizePortfolio(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput> {
  return optimizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioPrompt',
  input: { schema: OptimizePortfolioInputSchema },
  output: { schema: OptimizePortfolioOutputSchema },
  prompt: `You are an expert career coach and portfolio reviewer for software developers.
  Analyze the user's career goals and current work to provide actionable suggestions for improvement.

  User's Career Goals: {{{goals}}}
  User's Current Projects: {{{currentWork}}}

  Based on this information, provide concise and helpful advice for the following categories:
  - projectSuggestions: Recommend 1-2 new project ideas or ways to enhance existing ones to better align with their goals.
  - skillsToHighlight: Identify the most relevant skills to feature prominently.
  - presentationTips: Offer advice on how to improve the storytelling and visual presentation of their projects.`,
});

const optimizePortfolioFlow = ai.defineFlow(
  {
    name: 'optimizePortfolioFlow',
    inputSchema: OptimizePortfolioInputSchema,
    outputSchema: OptimizePortfolioOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
