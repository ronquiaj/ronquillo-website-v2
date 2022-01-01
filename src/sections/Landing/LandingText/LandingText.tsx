import React, { FC } from "react";
import { useScreenSize } from "contexts/ScreenSizeContext";
import TextFactory from "./TextFactory";
import arcText from "utilities/ArcText";

const LandingText: FC = () => {
  const screenSize = useScreenSize();
  return screenSize === "xs" ||
    screenSize === "sm" ||
    screenSize === "md" ||
    screenSize === "lg" ? (
    <TextFactory
      className="mb-5 font-medium tracking-widest transition-all cursor-pointer sm:mb-10 sm:text-5xl text-primary drop-shadow-md"
      text={[
        "ketchikan, alaska",
        "22 years old",
        "full-stack developer",
        "filipino",
      ]}
    />
  ) : (
    arcText(
      "ketchikan, alaska . 22 years old . full-stack developer . filipino",
      3,
      "font-medium tracking-widest text-primary drop-shadow-md ",
      "cursor-pointer hover:-translate-y-4 transition-all 3xl:text-4xl lg:text-2xl"
    )
  );
};
export default LandingText;
