import React from "react";

/**
 * Function which takes in text, the amount to arc the text by, the classname for this group, and the classname to apply to each character
 * @param text
 * @param arcAmount
 * @param className
 * @param applyToCharacters
 */
const arcText = (
  text: string,
  arcAmount: number,
  className: string,
  applyToCharacters: string
) => {
  const mid = Math.floor(text.length / 2);
  let total = mid * arcAmount;
  const factor = 1 / 50;
  console.log(text.split(""));
  const arcedText = text.split("").map((char, index) => {
    if (index < mid) total -= arcAmount;
    else total += arcAmount;
    return (
      <span
        className={applyToCharacters}
        style={{
          display: "inline-block",
          transform: `translateY(-${factor * Math.pow(total, 2)}px)  rotate(${
            mid - index
          }deg)`,
        }}
      >
        {char}&nbsp;
      </span>
    );
  });
  return <div className={className}>{arcedText}</div>;
};

export default arcText;
