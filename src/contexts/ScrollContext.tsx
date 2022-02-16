import React, {
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const ScrollContext = createContext({ scrollXPosition: 0, scrollYPosition: 0 });

const useScrollContext = () => useContext(ScrollContext);

type Props = {
  children: ReactNode;
};

const ScrollContextProvider: FC<Props> = ({ children }: Props) => {
  const [scrollXPosition, setScrollXPosition] = useState<number>(
    window.scrollX
  );
  const [scrollYPosition, setScrollYPosition] = useState<number>(
    window.scrollY
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollXPosition(window.scrollX);
      setScrollYPosition(window.scrollY);
    });
    return () =>
      window.removeEventListener("scroll", () => {
        setScrollXPosition(0);
        setScrollYPosition(0);
      });
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollXPosition, scrollYPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollContextProvider;
export { useScrollContext };
