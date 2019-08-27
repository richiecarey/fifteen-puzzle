import React from "react";
import { render } from "react-dom";
import FifteenPuzzle from "./FifteenPuzzle";

const App = (
  <div
    style={{
      display: "block",
      margin: "0 auto",
      width: "400px"
    }}
  >
    <FifteenPuzzle />
  </div>
);

render(App, document.getElementById("root"));
