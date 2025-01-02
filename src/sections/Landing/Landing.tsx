import React, { FC, useState } from "react";
import IconFooter from "./IconFooter/IconFooter";
import LandingText from "./LandingText/LandingText";
import LandingProfilePicture from "./LandingProfilePicture/LandingProfilePicture";
import DuctTape from "./DuctTape/DuctTape";

const BIRTHDAY = new Date("1999-10-26");
const calculateAge = () => {
  const diff = Date.now() - BIRTHDAY.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const Landing: FC = () => {
  const [isDuctTaped, setIsDuctTaped] = useState(false);
  const [stage, setStage] = useState(1);
  const calculatedAge = calculateAge();
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
        landingText={`los angeles, california . ${calculatedAge} years old . actor / developer . filipino`}
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
