import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Produto from "./Produto";

const App06 = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App06;
