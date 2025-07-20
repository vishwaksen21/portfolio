import OptimizerForm from './optimizer-form';

export default function OptimizerPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
          AI Portfolio Optimizer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Analyze your portfolio description and get AI-powered suggestions based on trending design styles to attract more views and engagement.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <OptimizerForm />
      </div>
    </div>
  );
}
