import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "5+",
    label: "Academic Projects",
  },
  {
    value: "1",
    label: "Internship Completed",
  },
  {
    value: "9.18/10",
    label: "GPA",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-24 sm:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center justify-center p-0">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text mb-2">
                  {stat.value}
                </p>
                <p className="text-base text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
