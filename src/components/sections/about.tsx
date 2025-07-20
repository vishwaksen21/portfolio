export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">ABOUT ME</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            A Glimpse Into My World
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate Computer Science student with a specialization in Data Science, maintaining an impressive GPA of 9.18/10. My strong foundation in programming and data science, combined with active participation in extracurricular activities and community service, distinguishes me. I excel in team-oriented settings where I can leverage both my analytical abilities and creative thinking to contribute effectively.
            </p>
        </div>
      </div>
    </section>
  );
}
