import React, { FC, useEffect, useRef } from "react";
import ProfilePicture from "components/ProfilePicture/ProfilePicture";
import "./styles.css";

type Props = {
  animating: boolean;
  interval: number;
  words: string[];
  className?: string;
  alt: string;
  path: string;
};

const TalkingProfilePicture: FC<Props> = ({
  className,
  interval,
  words,
  animating,
  alt,
  path,
}: Props) => {
  const animationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let intervalID: NodeJS.Timer;
    const animationRef = animationContainerRef.current;

    const startAnimation = () =>
      words.forEach((word, index) => animateWord(word, interval * index));

    const animateWord = (word: string, timeout: number) =>
      setTimeout(() => {
        if (animationRef)
          animationRef.innerHTML = `<h3 class='animation-text'>${word}</h3>`;
      }, timeout * 1000);

    if (animating) {
      startAnimation(); // Start animation immediately, then start an interval for it
      intervalID = setInterval(startAnimation, interval * 1000 * words.length);
    }

    return () => {
      if (animationRef) animationRef.style.setProperty("display", "none"); // Immediately stop any text already being shown by hiding parent element
      clearInterval(intervalID);
    };
  }, [interval, words, animating]);

  return (
    <div className="flex items-center justify-center picture-container">
      <div
        ref={animationContainerRef}
        className="absolute animation-container"
      ></div>
      <ProfilePicture className={className} alt={alt} path={path} />
    </div>
  );
};

export default TalkingProfilePicture;
