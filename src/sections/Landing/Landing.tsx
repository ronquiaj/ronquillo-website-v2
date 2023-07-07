import React, { FC, useState } from "react";
import IconFooter from "./IconFooter/IconFooter";
import LandingText from "./LandingText/LandingText";
import LandingProfilePicture from "./LandingProfilePicture/LandingProfilePicture";
import DuctTape from "./DuctTape/DuctTape";

const Landing: FC = () => {
  const [isDuctTaped, setIsDuctTaped] = useState(false);
  const [stage, setStage] = useState(1);
  return (
    <section className="flex flex-col items-center w-full min-h-full m-0 font-medium bg-background">
      <h1 className="mt-12 tracking-widest text-center pointer-events-none hover:translate-y-4 drop-shadow-md xs:text-4xl sm:text-6xl 3xl:text-7xl text-primary">
        adrian ronquillo
      </h1>
      <LandingProfilePicture
        isDuctTaped={isDuctTaped}
        incrementStage={() => stage !== 2 && setStage((stage) => stage + 1)}
        stage={stage}
      />
      <LandingText
        landingText="san jose, california . 23 years old . actor / developer . filipino"
        animateText={stage !== 1}
      />
      <IconFooter className="mt-auto -translate-y-5 icon-footer " />
      <div className="relative w-full h-full">
        <DuctTape
          ductTapeFace={() => setIsDuctTaped(true)}
          isDuctTaped={isDuctTaped}
        />
      </div>
    </section>
  );
};

export default Landing;
