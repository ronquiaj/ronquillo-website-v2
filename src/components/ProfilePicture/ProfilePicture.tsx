import React, { FC } from "react";

type Props = { path: string; alt: string; className?: string };

const ProfilePicture: FC<Props> = ({ alt, className, path }: Props) => (
  <img
    className={`drop-shadow-lg border-8 border-primary rounded-full 3xl:w-92 3xl:h-92 sm:w-72 sm:h-72 xs:w-52 xs:h-52 ${className}`}
    src={path}
    alt={`profile for ${alt}`}
  />
);

export default ProfilePicture;
