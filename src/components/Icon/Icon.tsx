import React, { FC } from "react";
import "./styles.css";

type Props = {
  path: string;
  alt: string;
};

const Icon: FC<Props> = ({ path, alt }: Props) => {
  return <img className="icon" src={path} alt={alt} />;
};

export default Icon;
