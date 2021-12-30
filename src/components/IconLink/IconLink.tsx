import React, { FC } from "react";
import "./styles.css";

type Props = {
  path: string;
  alt: string;
  url: string;
  classes?: string;
};

const IconLink: FC<Props> = ({ path, alt, url, classes }: Props) => {
  return (
    <a href={url}>
      <img className={`icon ${classes}`} src={path} alt={alt} />
    </a>
  );
};

export default IconLink;
