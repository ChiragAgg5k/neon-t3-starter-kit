import { Card, CardContent } from "@/components/ui/card";
import {
  BoltIcon,
  MoveHorizontal,
  PuzzleIcon,
  RocketIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react";

const features = [
  {
    title: "Fast Deployment",
    description:
      "Deploy your app with ease using our optimized build and deployment process.",
    icon: <RocketIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: "Customizable",
    description: "Easily customize the starter kit to fit your specific needs.",
    icon: <MoveHorizontal className="h-12 w-12 text-primary" />,
  },
  {
    title: "Secure",
    description:
      "Built with security in mind, ensuring your application is protected.",
    icon: <ShieldIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: "Performant",
    description:
      "Optimized for speed and performance, delivering a lightning-fast user experience.",
    icon: <BoltIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: "Extensible",
    description:
      "Easily extend the functionality of the starter kit with additional components and modules.",
    icon: <PuzzleIcon className="h-12 w-12 text-primary" />,
  },
  {
    title: "Community-Driven",
    description:
      "Benefit from the support and contributions of our active community.",
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover the powerful features of this Neon T3 starter kit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-all duration-300 ease-in-out hover:border-black"
            >
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                {feature.icon}
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
