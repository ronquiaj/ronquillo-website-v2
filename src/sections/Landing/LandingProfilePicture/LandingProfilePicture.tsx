import EyeBalls from "components/EyeBalls/Eyeballs";
import TalkingProfilePicture from "components/TalkingProfilePicture/TalkingProfilePicture";
import React, { FC } from "react";

type Props = {
  stage: number;
  isDuctTaped: boolean;
  incrementStage: () => void;
};

const profilePictureStyle =
  "object-cover object-[-12px] xs:mb-8 sm:mb-16 xl:mb-20 3xl:mb-52 ";

const LandingProfilePicture: FC<Props> = ({
  stage,
  isDuctTaped,
  incrementStage,
}: Props) => {
  let profilePicture: JSX.Element = <></>;
  switch (stage) {
    case 1:
      profilePicture = (
        <TalkingProfilePicture
          className={profilePictureStyle}
          path="profilePictureShaded.png"
          alt="drawn adrian"
          animating={!isDuctTaped}
          interval={5}
          words={["pst...", "hey you...", "yeah you...", "click me..."]}
        />
      );
      break;
    case 2:
      profilePicture = (
        <>
          <EyeBalls className="absolute z-20 -translate-x-1/2 3xl:-translate-y-4 xs:ml-1 xs:translate-y-4 top-1/4 left-1/2" />
          <TalkingProfilePicture
            className={profilePictureStyle}
            alt="drawn adrian with eyeballs"
            path="profilePictureShaded.png"
            animating={!isDuctTaped}
            interval={5}
            words={["so clear...", "so bright...", "click me..."]}
          />
        </>
      );
      break;
    default:
      profilePicture = (
        <TalkingProfilePicture
          alt="adrian"
          path="profilePicture.png"
          animating={!isDuctTaped}
          className={profilePictureStyle}
          interval={5}
          words={["much better!", "thank you!", ":)"]}
        />
      );
  }
  return (
    <div className="relative cursor-pointer" onClick={incrementStage}>
      {profilePicture}
    </div>
  );
};

export default LandingProfilePicture;
