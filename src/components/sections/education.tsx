import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Diamond } from "lucide-react";

const educationData = [
  {
    institution: "CMR Institute Of Technology",
    degree: "Bachelor's degree, Computer Science",
    years: "Sep 2023 - Jul 2027",
    grade: "Grade: 9.18 CGPA",
    skills: "Python (Programming Language) and Event Management",
    logo: "https://firebasestorage.googleapis.com/v0/b/stunning-car-34200.appspot.com/o/i-or6g170h1rkaq04g1c%2FCMR_logo.png?alt=media&token=a62c5e52-1135-4389-8d14-239611f727ce",
    "data-ai-hint": "university building",
  },
  {
    institution: "Dream World",
    degree: "CBSE",
    years: "",
    grade: "Grade: 93/100",
    skills: "",
    logo: "https://placehold.co/100x100.png",
    "data-ai-hint": "school building",
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
                    <Image
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      width={50}
                      height={50}
                      className="rounded-full object-contain h-12 w-12"
                      data-ai-hint={edu['data-ai-hint']}
                    />
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
