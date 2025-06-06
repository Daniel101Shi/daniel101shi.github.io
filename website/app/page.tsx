import Hero from "@/components/hero";
import Picture from "@/components/picture";
import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex items-center px-10">
      <Meteors number={30} className="absolute -z-10 " />
      <Hero />
    </div>
  );
}
