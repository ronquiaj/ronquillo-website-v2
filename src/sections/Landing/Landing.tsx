import React, { FC } from "react";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import IconFooter from "./IconFooter/IconFooter";
import LandingText from "./LandingText/LandingText";
import "./styles.css";

const Landing: FC = () => {
  return (
    <section className="flex flex-col items-center w-full h-full m-0 font-medium bg-background debug-screens">
      <h1 className="mt-12 tracking-widest text-center pointer-events-none hover:translate-y-4 drop-shadow-md xs:text-4xl sm:text-6xl 3xl:text-7xl text-primary">
        adrian ronquillo
      </h1>
      <ProfilePicture
        className=" object-cover object-[-12px] xs:mb-8 sm:mb-16 xl:mb-20 3xl:mb-52 "
        alt="adrian"
        path="profilePictureShaded.png"
      />
      <LandingText />
      <IconFooter className="absolute bottom-7" />
    </section>
  );
};

export default Landing;
