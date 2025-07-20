import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    value: "15k+",
    label: "Happy Customers",
  },
  {
    value: "12k+",
    label: "Tickets Solved",
  },
  {
    value: "9/10",
    label: "Average Rating",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-12 sm:py-16 md:py-24 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-4xl md:text-5xl font-extrabold text-primary font-headline">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
