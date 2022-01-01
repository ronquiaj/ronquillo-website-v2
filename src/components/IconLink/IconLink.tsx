import React, { FC, useState } from "react";

type Props = {
  path: string;
  alt: string;
  url: string;
  displayOnHover?: string;
  className?: string;
};

const IconLink: FC<Props> = ({
  path,
  alt,
  url,
  className,
  displayOnHover,
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col items-center text-center">
      {isActive && (
        <h4 className="fixed transition-all pointer-events-none text-primary bg -mt-7">
          {displayOnHover}
        </h4>
      )}
      <a href={url}>
        <img
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className={`icon  cursor-pointer sm:w-16 xs:w-12  ${className}`}
          src={path}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default IconLink;
