import React, { FC } from "react";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import "./styles.css";

type Props = { interval: number; words: string[]; className?: string };

const TalkingProfilePicture: FC<Props> = ({
  className,
  interval,
  words,
}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute ">
        <h3 className="relative z-10 3xl:bottom-16 xl:bottom-0 xs:-bottom-3 left-1/2">
          pst.........
        </h3>
      </div>
      <ProfilePicture
        className={`object-cover object-[-12px] xs:mb-8 sm:mb-16 xl:mb-20 3xl:mb-52 ${className}`}
        alt="adrian"
        path="profilePictureShaded.png"
      />
    </div>
  );
};

export default TalkingProfilePicture;
