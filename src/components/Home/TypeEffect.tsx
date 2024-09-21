"use client";
import { TypewriterEffectSmooth } from "../ui/typewritter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unleash",
    },
    {
      text: "Your",
    },
    {
      text: "Potential",
    },
    {
      text: "with ",
    },
    {
      text: "FitNest ",
      className: "text-primary",
    },
  ];
  return (
    <div className="flex flex-col flex-wrap items-center justify-center  mt-10  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
