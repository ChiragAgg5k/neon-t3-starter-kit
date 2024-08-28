import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import Link from "next/link";

const allFeatures = [
  "Basic features",
  "Advanced features",
  "Community support",
  "Priority support",
];

const plans = [
  {
    name: "Starter",
    price: 0,
    features: ["Basic features", "Community support"],
  },
  {
    name: "Pro",
    price: 19,
    features: ["Basic features", "Advanced features", "Community support"],
  },
  {
    name: "Enterprise",
    price: 99,
    features: [
      "Basic features",
      "Advanced features",
      "Community support",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose the plan that best fits your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name}>
              <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="flex flex-col gap-2 text-muted-foreground">
                  {allFeatures.map((feature) => (
                    <li key={feature}>
                      {plan.features.includes(feature) ? (
                        <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      ) : (
                        <XIcon className="mr-2 inline-block h-5 w-5 text-muted-foreground" />
                      )}
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/auth/signin" className="btn btn-primary">
                  <Button>Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
