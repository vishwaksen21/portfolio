"use server";

import { portfolioOptimizer, type PortfolioOptimizerInput, type PortfolioOptimizerOutput } from "@/ai/flows/portfolio-optimizer";

export async function runPortfolioOptimizer(input: PortfolioOptimizerInput): Promise<{
  data: PortfolioOptimizerOutput | null;
  error: string | null;
}> {
  try {
    const result = await portfolioOptimizer(input);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { data: null, error: `Failed to run portfolio optimizer: ${errorMessage}` };
  }
}
