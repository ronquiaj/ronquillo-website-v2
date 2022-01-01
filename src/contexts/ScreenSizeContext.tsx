import React, {
  FC,
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const screens = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  "3xl": "1900px",
};

const ScreenSizeContext = createContext<keyof typeof screens>("md");

const useScreenSize = () => useContext(ScreenSizeContext);

type Props = {
  children: ReactNode;
};

const getScreenSize = (windowWidth: number) => {
  const smMatch = screens["sm"].match(/\d+/);
  const mdMatch = screens["md"].match(/\d+/);
  const lgMatch = screens["lg"].match(/\d+/);
  const xlMatch = screens["xl"].match(/\d+/);
  const twoxlMatch = screens["2xl"].match(/\d+/);
  const threexlMatch = screens["3xl"].match(/\d+/);

  const sm = smMatch ? parseInt(smMatch[0]) : 0;
  const md = mdMatch ? parseInt(mdMatch[0]) : 0;
  const lg = lgMatch ? parseInt(lgMatch[0]) : 0;
  const xl = xlMatch ? parseInt(xlMatch[0]) : 0;
  const twoxl = twoxlMatch ? parseInt(twoxlMatch[0]) : 0;
  const threexl = threexlMatch ? parseInt(threexlMatch[0]) : 0;

  if (windowWidth >= threexl) return "3xl";
  else if (windowWidth < threexl && windowWidth >= twoxl) return "2xl";
  else if (windowWidth < twoxl && windowWidth >= xl) return "xl";
  else if (windowWidth < xl && windowWidth >= lg) return "lg";
  else if (windowWidth < lg && windowWidth >= md) return "md";
  else if (windowWidth < md && windowWidth >= sm) return "sm";
  else return "xs";
};

const ScreenSizeContextProvider: FC<Props> = ({ children }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [screenSize, setScreenSize] = useState<keyof typeof screens>(
    getScreenSize(windowWidth)
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setScreenSize(getScreenSize(windowWidth));
  }, [windowWidth]);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeContextProvider;
export { useScreenSize, screens };
