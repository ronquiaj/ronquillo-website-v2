import React, { FC } from "react";
import { useScreenIsSmall } from "contexts/SmallScreenContext";
import TextFactory from "./TextFactory";

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
    <h2 className="text-center pointer-events-none drop-shadow-md 3xl:text-5xl sm:tracking-widest text-primary sm:text-3xl">
      ketchikan, alaska . 22 years old . full-stack developer . filipino
    </h2>
  );
};
export default LandingText;
