import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "NoSQL", "Docker", "Git"
];

const certifications = [
  {
    title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    issuer: "Stanford University",
    url: "https://www.coursera.org/account/accomplishments/verify/1X2821Y190IK",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    url: "https://www.coursera.org/account/accomplishments/verify/1X2821Y190IK",
  },
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
            <CardContent className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div key={cert.title}>
                    {cert.url ? (
                       <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
                        {cert.title}
                      </a>
                    ) : (
                      <p className="font-semibold">{cert.title}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
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
