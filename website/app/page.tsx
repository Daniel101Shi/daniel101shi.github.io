import Hero from "@/components/hero";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="relative flex items-center px-10">
      <Meteors number={30} className="absolute -z-10 " />
      <Hero />
    </div>
  );
}
