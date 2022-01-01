import React, { FC } from "react";

type Props = {
  path: string;
  alt: string;
  url: string;
  className?: string;
};

const IconLink: FC<Props> = ({ path, alt, url, className }: Props) => {
  return (
    <a href={url}>
      <img
        className={`icon cursor-pointer sm:w-16 xs:w-12  ${className}`}
        src={path}
        alt={alt}
      />
    </a>
  );
};

export default IconLink;
