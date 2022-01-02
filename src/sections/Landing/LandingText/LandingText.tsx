import React, { FC } from "react";
import { useScreenSize } from "contexts/ScreenSizeContext";
import LandingArcText from "../LandingArcText/LandingArcText";
import TextFactory from "./TextFactory";

const LandingText: FC = () => {
  const screenSize = useScreenSize();
  return screenSize === "xs" ||
    screenSize === "sm" ||
    screenSize === "md" ||
    screenSize === "lg" ? (
    <TextFactory
      className="mb-5 font-medium tracking-widest transition-all cursor-pointer sm:mb-10 sm:text-4xl text-primary drop-shadow-md xs:last-of-type:mb-20 "
      text={[
        "ketchikan, alaska",
        "22 years old",
        "frontend developer",
        "filipino",
      ]}
    />
  ) : (
    <LandingArcText animationDuration={2} />
  );
};
export default LandingText;
