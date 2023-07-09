import React, { FC } from "react";
import ScreenSizeProvider from "contexts/ScreenSizeContext";
import ScrollContextProvider from "contexts/ScrollContext";
import Landing from "../../app/landing/page";

const App: FC = () => {
  return (
    <>
      <ScreenSizeProvider>
        <ScrollContextProvider>
          <Landing />
        </ScrollContextProvider>
      </ScreenSizeProvider>
    </>
  );
};

export default App;
