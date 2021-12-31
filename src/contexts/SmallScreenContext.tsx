import React, {
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const SmallScreenContext = createContext<boolean>(false);

const useScreenIsSmall = () => useContext(SmallScreenContext);

type Props = {
  children: ReactNode;
};

const SmallScreenProvider: FC<Props> = ({ children }: Props) => {
  const [screenIsSmall, setScreenIsSmall] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | null>(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth && windowWidth < 640) setScreenIsSmall(true);
    else setScreenIsSmall(false);
  }, [windowWidth]);

  return (
    <SmallScreenContext.Provider value={screenIsSmall}>
      {children}
    </SmallScreenContext.Provider>
  );
};

export default SmallScreenProvider;
export { useScreenIsSmall };
