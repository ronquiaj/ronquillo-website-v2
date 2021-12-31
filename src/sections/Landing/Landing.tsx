import React, { FC } from "react";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import IconFooter from "./IconFooter/IconFooter";
import LandingText from "./LandingText/LandingText";
import "./styles.css";

const Landing: FC = () => {
  return (
    <section className="flex flex-col items-center w-full h-full m-0 bg-background debug-screens">
      <h1 className="mt-12 tracking-widest text-center pointer-events-none drop-shadow-md xs:text-4xl sm:text-5xl 3xl:text-7xl text-primary ">
        adrian ronquillo
      </h1>
      <ProfilePicture
        className="object-cover xs:mb-8 sm:mb-28"
        alt="adrian"
        path="profilePictureShaded.png"
      />
      <LandingText />
      <IconFooter className="absolute bottom-7" />
    </section>
  );
};

export default Landing;
