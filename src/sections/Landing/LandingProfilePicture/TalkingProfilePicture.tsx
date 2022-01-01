import React, { FC, useEffect, useRef } from "react";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import "./styles.css";

type Props = { interval: number; words: string[]; className?: string };

const TalkingProfilePicture: FC<Props> = ({
  className,
  interval,
  words,
}: Props) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAnimation = () =>
      words.forEach((word, index) => animateWord(word, interval * index));

    const animateWord = (word: string, timeout: number) => {
      setTimeout(() => {
        if (animationContainerRef.current)
          animationContainerRef.current.innerHTML = `<h3 class='animation-text'>${word}</h3>`;
      }, timeout * 1000);
    };

    startAnimation(); // Start animation immediately, then start an interval for it

    const intervalID = setInterval(
      startAnimation,
      interval * 1000 * words.length
    );

    return () => clearInterval(intervalID);
  }, [interval, words]);

  return (
    <div className="flex items-center justify-center picture-container">
      <div
        ref={animationContainerRef}
        className="absolute animation-container"
      ></div>
      <ProfilePicture
        className={`object-cover object-[-12px] xs:mb-8 sm:mb-16 xl:mb-20 3xl:mb-52 ${className}`}
        alt="adrian"
        path="profilePictureShaded.png"
      />
    </div>
  );
};

export default TalkingProfilePicture;
