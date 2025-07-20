import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "NoSQL", "Docker", "Git"
];

const certifications = [
  "Certified TensorFlow Developer",
  "AWS Certified Solutions Architect - Associate",
];

const coursework = [
  "Data Structures & Algorithms",
  "Machine Learning",
  "Database Systems",
  "Web Development",
  "Operating Systems"
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">MY ABILITIES</p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
              Skills & Expertise
            </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {certifications.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Relevant Coursework</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="list-disc list-inside space-y-2">
                    {coursework.map(course => <li key={course}>{course}</li>)}
                </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
