import React, { FC } from "react";
import IconLink from "components/IconLink/IconLink";

type Props = { isDuctTaped: boolean; ductTapeFace: () => void };

const DuctTape: FC<Props> = ({ ductTapeFace, isDuctTaped }: Props) => {
  return (
    <button
      onClick={ductTapeFace}
      className={`absolute bottom-[1%] left-[2%] xs:w-5 xl:w-12 ${
        isDuctTaped && "hidden"
      }`}
    >
      <IconLink
        alt="duct tape"
        path="tape.png"
        url="#"
        displayOnHover="duct tape"
      />
    </button>
  );
};

export default DuctTape;
