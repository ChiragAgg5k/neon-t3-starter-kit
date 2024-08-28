import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
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
        <div className="relative h-[400px] w-full max-w-[750px] rounded-xl bg-black/80" />
      </div>
    </section>
  );
}
