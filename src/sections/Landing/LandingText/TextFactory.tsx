import React, { FC } from "react";

type Props = { text: string[]; className: string };

const TextFactory: FC<Props> = ({ className, text }: Props) => (
  <>
    {text.map((item, index) => (
      <h3 key={`${item}${index}`} className={className}>
        {item}
      </h3>
    ))}
  </>
);

export default TextFactory;
