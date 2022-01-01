import ScreenSizeProvider from "contexts/ScreenSizeContext";
import React, { FC } from "react";
import Landing from "../sections/Landing/Landing";

const App: FC = () => {
  return (
    <>
      <ScreenSizeProvider>
        <Landing />
      </ScreenSizeProvider>
    </>
  );
};

export default App;
