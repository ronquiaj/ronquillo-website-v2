import React, { FC, useEffect } from "react";
import arcText from "utilities/ArcText";

type Props = {
  animationDuration: number;
};

const LandingArcText: FC<Props> = ({ animationDuration }: Props) => {
  useEffect(() => {
    const arcCharacters = document.querySelectorAll(".arc-character");
    const totalDuration = animationDuration / arcCharacters.length;
    let intervalID: NodeJS.Timer;

    const startAnimation = () => {
      arcCharacters.forEach((character, index) => {
        applyTransition(character, totalDuration, index);
      });
    };

    const applyTransition = (
      char: Element,
      interval: number,
      index: number
    ) => {
      const totalInterval = interval * index * 1000;
      setTimeout(() => {
        char.setAttribute("style", `transform: translateY(-2rem)`);
      }, totalInterval);
      setTimeout(() => {
        char.setAttribute("style", `transform: translateY(2rem)`);
      }, totalInterval + 250);
    };

    startAnimation();
    setInterval(startAnimation, animationDuration * 1000 + 500);

    return () => clearInterval(intervalID);
  }, [animationDuration]);

  const renderedArcText = arcText(
    "ketchikan, alaska . 22 years old . frontend developer . filipino",
    3,
    "font-medium tracking-widest text-primary drop-shadow-md ",
    "arc-character cursor-pointer hover:-translate-y-4 transition-all 3xl:text-4xl lg:text-2xl"
  );

  return renderedArcText;
};

export default LandingArcText;
