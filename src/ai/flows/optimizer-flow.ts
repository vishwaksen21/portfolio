
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
  projectAnalyses: z
    .array(
      z.object({
        projectName: z.string().describe('The name of the project being analyzed.'),
        trendScore: z
          .number()
          .min(1)
          .max(10)
          .describe('A score from 1 to 10 indicating how well the project aligns with current industry trends (1=low, 10=high).'),
        justification: z.string().describe('A brief justification for the assigned trend score.'),
      })
    )
    .describe('An analysis of each project provided by the user.'),
});
export type OptimizePortfolioOutput = z.infer<typeof OptimizePortfolioOutputSchema>;

export async function optimizePortfolio(input: OptimizePortfolioInput): Promise<OptimizePortfolioOutput> {
  return optimizePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizePortfolioPrompt',
  input: { schema: OptimizePortfolioInputSchema },
  output: { schema: OptimizePortfolioOutputSchema },
  prompt: `You are an expert career coach and tech industry analyst reviewing a software developer's portfolio.
  Analyze the user's career goals and current work to provide actionable suggestions for improvement.
  For each project listed, provide a "Trend Score" from 1-10 based on how well the technologies and problem space align with current, popular industry trends. 1 is not trendy, 10 is very trendy.

  User's Career Goals: {{{goals}}}
  User's Current Projects: {{{currentWork}}}

  Based on this information, provide concise and helpful advice for the following categories:
  - projectSuggestions: Recommend 1-2 new project ideas or ways to enhance existing ones to better align with their goals.
  - skillsToHighlight: Identify the most relevant skills to feature prominently.
  - presentationTips: Offer advice on how to improve the storytelling and visual presentation of their projects.
  - projectAnalyses: Analyze each project from "User's Current Projects". For each one, provide its name, a trendScore, and a brief justification for the score.`,
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
