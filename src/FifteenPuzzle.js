import React, { useState } from "react";
import Tile from "./Tile";
import "./FifteenPuzzle.css";
import legalMove from "./utils";

export default function FifteenPuzzle() {
  let tiles = [];
  let blank = [];

  tiles = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  blank = [3, 3];

  const [num, setNum] = useState(tiles);

  function handler(i, j) {
    if (legalMove()) {
      console.log("this is true");
    }

    tiles = [...num];
    tiles[blank[0]][blank[1]] = tiles[i][j];
    tiles[i][j] = 0;
    blank = [i, j];
    setNum(tiles);
  }

  const listItems = num.map((numArray, row) => {
    return numArray.map((num, col) => (
      <Tile
        key={(row + col).toString()}
        num={num}
        i={row}
        j={col}
        handler={handler}
      />
    ));
  });

  return <div className="grid">{listItems}</div>;
}
