import ScreenSizeProvider from "contexts/ScreenSizeContext";
import ScrollContextProvider from "contexts/ScrollContext";
import React, { FC } from "react";
import Projects from "sections/Projects/Projects";
import Landing from "../sections/Landing/Landing";

const App: FC = () => {
  return (
    <>
      <ScreenSizeProvider>
        <ScrollContextProvider>
          <Landing />
          <Projects />
        </ScrollContextProvider>
      </ScreenSizeProvider>
    </>
  );
};

export default App;
