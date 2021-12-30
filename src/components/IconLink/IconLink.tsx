import React, { FC } from "react";

type Props = {
  path: string;
  alt: string;
  url: string;
  classes?: string;
};

const IconLink: FC<Props> = ({ path, alt, url, classes }: Props) => {
  return (
    <a href={url}>
      <img
        className={`icon cursor-pointer 3xl:w-20 xs:w-12 ${classes}`}
        src={path}
        alt={alt}
      />
    </a>
  );
};

export default IconLink;
