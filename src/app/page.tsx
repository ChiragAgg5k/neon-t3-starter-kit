// Shadcn UI

// Components
import Benefits from "./_components/benefits";
import Contact from "./_components/contact";
import Features from "./_components/features";
import Hero from "./_components/hero";
import Pricing from "./_components/pricing";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
}
