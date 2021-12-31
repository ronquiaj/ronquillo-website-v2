import React, { FC } from "react";
import { useScreenIsSmall } from "contexts/SmallScreenContext";
import TextFactory from "./TextFactory";
import arcText from "utilities/ArcText";

const LandingText: FC = () => {
  const screenIsSmall = useScreenIsSmall();
  return screenIsSmall ? (
    <TextFactory
      className="mb-5 tracking-widest pointer-events-none text-primary drop-shadow-md"
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
      "pointer-events-none tracking-wider sm:text-3xl text-primary drop-shadow-md 3xl:text-4xl ",
      '"'
    )
  );
};
export default LandingText;
