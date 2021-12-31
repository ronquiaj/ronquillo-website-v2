import React, { FC } from "react";
import IconLink from "../../../components/IconLink/IconLink";

type Props = { className?: string };

const IconFooter: FC<Props> = ({ className }: Props) => {
  return (
    <div
      className={`flex flex-row xs:w-full sm:w-1/2 lg:w-1/4 iconfooter justify-evenly ${className}`}
    >
      <IconLink
        path="github.png"
        alt="github logo"
        url="https://github.com/ronquiaj"
      />
      <IconLink
        url="https://www.linkedin.com/in/adrian-ronquillo-96403a1b8"
        path="linkedin.png"
        alt="linkedin logo"
      />
      <IconLink
        url="https://www.instagram.com/aj.ronquillo/"
        path="instagram.png"
        alt="instagram logo"
      />
    </div>
  );
};

export default IconFooter;
