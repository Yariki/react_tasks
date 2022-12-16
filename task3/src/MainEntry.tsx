import React from "react";

import { Header } from "./Components/Header/Header";
import { Movies } from "./Components/Movies/Movies";

export const MainEntry: React.FC = () => {
  return (
    <>
      <Header />
      <Movies />
    </>
  );
};
