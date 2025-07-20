
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Diamond } from "lucide-react";

const educationData = [
  {
    institution: "CMR Institute Of Technology",
    degree: "Bachelor's degree, Computer Science",
    years: "Sep 2023 - Jul 2027",
    grade: "Grade: 9.18 CGPA",
    skills: "Python (Programming Language) and Event Management",
  },
  {
    institution: "Dream World",
    degree: "CBSE",
    years: "",
    grade: "Grade: 93/100",
    skills: "",
  },
];

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 bg-background">
      <div className="container px-4 mx-auto md:px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground">MY JOURNEY</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-2 mb-4"></div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
            Education
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-6">
              {educationData.map((edu, index) => (
                <div key={index}>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                      {edu.years && <p className="text-sm text-muted-foreground">{edu.years}</p>}
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                      {edu.skills && (
                        <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                          <Diamond className="w-4 h-4" />
                          <span>{edu.skills}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {index < educationData.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
