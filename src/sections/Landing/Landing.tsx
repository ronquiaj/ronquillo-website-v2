import React, { FC, useState } from "react";
import IconFooter from "./IconFooter/IconFooter";
import TalkingProfilePicture from "./LandingProfilePicture/TalkingProfilePicture";
import LandingText from "./LandingText/LandingText";

const Landing: FC = () => {
  const [isDuctTaped, setIsDuctTaped] = useState(false);
  return (
    <section className="flex flex-col items-center w-full min-h-full m-0 font-medium bg-background debug-screens">
      <h1 className="mt-12 tracking-widest text-center pointer-events-none hover:translate-y-4 drop-shadow-md xs:text-4xl sm:text-6xl 3xl:text-7xl text-primary">
        adrian ronquillo
      </h1>
      <TalkingProfilePicture
        animating={!isDuctTaped}
        interval={5}
        words={["pst...", "hey you...", "yeah you...", "click me..."]}
      />
      <LandingText />
      <IconFooter className="mt-auto -translate-y-5 icon-footer" />
      {!isDuctTaped && (
        <button onClick={() => setIsDuctTaped(true)}>duct tape</button>
      )}
    </section>
  );
};

export default Landing;
