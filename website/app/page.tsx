import { Meteors } from "@/components/ui/meteors";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Meteors number={30} className=""/>
    </div>
  );
}
