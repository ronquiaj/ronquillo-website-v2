import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import React, { FC } from "react";
import IconFooter from "./IconFooter/IconFooter";
import "./styles.css";

const Landing: FC = () => {
  return (
    <section className="flex flex-col items-center w-full h-full m-0 bg-background">
      <h1 className="mt-12 tracking-widest text-center 3xl:text-7xl text-primary debug-screens">
        adrian ronquillo
      </h1>
      <ProfilePicture
        className="object-cover mb-20"
        alt="adrian"
        path="profilePictureShaded.png"
      />
      <h2 className="text-center 3xl:text-5xl sm:tracking-widest text-primary xs:text-md sm:text-3xl">
        ketchikan, alaska . 22 years old . full-stack engineer . filipino
      </h2>
      <IconFooter className="absolute bottom-7" />
    </section>
  );
};

export default Landing;
