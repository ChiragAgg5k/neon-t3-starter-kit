import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BenefitsComponent } from "./_components/benefits";
import Link from "next/link";
import { CheckIcon, XIcon } from "lucide-react";
import Hero from "./_components/hero";
import Features from "./_components/features";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Hero />
        <Features />

        <section id="benefits" className="bg-muted py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Benefits
              </h2>
              <p className="mt-4 text-muted-foreground">
                Discover the advantages of using our Next.js starter kit.
              </p>
            </div>
            <BenefitsComponent />
          </div>
        </section>
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
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Basic features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Community support
                    </li>
                    <li>
                      <XIcon className="mr-2 inline-block h-5 w-5 text-muted-foreground" />
                      Advanced features
                    </li>
                    <li>
                      <XIcon className="mr-2 inline-block h-5 w-5 text-muted-foreground" />
                      Priority support
                    </li>
                  </ul>
                  <Link href="/auth/signin" className="btn btn-primary">
                    <Button>Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Basic features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Advanced features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Community support
                    </li>
                    <li>
                      <XIcon className="mr-2 inline-block h-5 w-5 text-muted-foreground" />
                      Priority support
                    </li>
                  </ul>
                  <Link href="/auth/signin" className="btn btn-primary">
                    <Button>Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center gap-6 p-8">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="flex flex-col gap-2 text-muted-foreground">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Basic features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Advanced features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Community support
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-5 w-5 text-primary" />
                      Priority support
                    </li>
                  </ul>
                  <Link href="/auth/signin" className="btn btn-primary">
                    <Button>Get Started</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-muted-foreground">
                Get in touch with our team for more information.
              </p>
            </div>
            <div className="mx-auto max-w-xl">
              <form className="space-y-4 rounded-xl bg-background/80 p-6 backdrop-blur">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
