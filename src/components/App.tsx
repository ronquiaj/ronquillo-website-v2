import SmallScreenProvider from "contexts/SmallScreenContext";
import React, { FC } from "react";
import Landing from "../sections/Landing/Landing";

const App: FC = () => {
  return (
    <>
      <SmallScreenProvider>
        <Landing />
      </SmallScreenProvider>
    </>
  );
};

export default App;
