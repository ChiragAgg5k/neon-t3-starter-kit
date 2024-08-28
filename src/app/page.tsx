import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BenefitsComponent } from "./_components/benefits";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary-foreground py-20 text-primary-foreground">
          <div className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:flex-row lg:gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Supercharge your Neon+T3 development
              </h1>
              <p className="mt-4 text-lg">
                Get started with a feature-rich, production-ready starter kit
                integrated with Neon Database and T3 stack.
              </p>
              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <Link href="/auth/signin" className="btn btn-primary">
                  <Button>Get Started</Button>
                </Link>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
            {/* <Image
              src="/landing.png"
              width={600}
              height={400}
              alt="Hero"
              className="rounded-xl border"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            /> */}
            <div className="relative h-[400px] w-full max-w-[750px] rounded-xl bg-black/80" />
          </div>
        </section>
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
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <RocketIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Fast Deployment</h3>
                  <p className="text-muted-foreground">
                    Deploy your app with ease using our optimized build and
                    deployment process.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <MoveHorizontalIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Customizable</h3>
                  <p className="text-muted-foreground">
                    Easily customize the starter kit to fit your specific needs.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <ShieldCheckIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Secure</h3>
                  <p className="text-muted-foreground">
                    Built with security in mind, ensuring your application is
                    protected.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <BoltIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Performant</h3>
                  <p className="text-muted-foreground">
                    Optimized for speed and performance, delivering a
                    lightning-fast user experience.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <PuzzleIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Extensible</h3>
                  <p className="text-muted-foreground">
                    Easily extend the functionality of the starter kit with
                    additional components and modules.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 ease-in-out hover:border-black">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                  <UsersIcon className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">Community-Driven</h3>
                  <p className="text-muted-foreground">
                    Benefit from the support and contributions of our active
                    community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
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

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function MoveHorizontalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function PuzzleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  );
}

function RocketIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
