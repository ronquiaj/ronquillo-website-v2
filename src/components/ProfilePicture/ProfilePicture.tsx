import React, { FC } from "react";

type Props = { path: string; alt: string; className?: string };

const ProfilePicture: FC<Props> = ({ alt, className, path }: Props) => (
  <img
    className={`drop-shadow-lg border-8 border-primary rounded-full 2xl:w-80 2xl:h-80 xs:w-52 xs:h-52 sm:h-60 sm:w-60 ${className}`}
    src={path}
    alt={`profile for ${alt}`}
  />
);

export default ProfilePicture;
