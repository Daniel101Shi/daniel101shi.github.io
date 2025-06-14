import Picture from "./picture"
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function Hero() {
    return (
    <div className="flex mt-16 ml-20 items-center gap-25">
        <Picture/>
        <h1 className="text-8xl font-bold text-black">
          <TextGenerateEffect words="Hi I'm Daniel..."/>
        </h1>
      </div>
    );
}