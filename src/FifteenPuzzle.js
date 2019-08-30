import React, { useState } from "react";
import Tile from "./Tile";
import "./FifteenPuzzle.css";
import legalMove from "./utils";

export default function FifteenPuzzle() {
  var tiles = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  var blank = [3, 3];

  const [num, setNum] = useState(tiles);
  const [open, setOpen] = useState(blank);

  function handler(clickX, clickY) {
    if (legalMove(clickX, clickY, open)) {
      tiles = [...num];
      blank = [...open];

      tiles[blank[0]][blank[1]] = tiles[clickX][clickY];
      tiles[clickX][clickY] = 0;

      blank[0] = clickX;
      blank[1] = clickY;

      setNum(tiles);
      setOpen(blank);
    }
  }

  const listItems = num.map((numArray, row) => {
    return numArray.map((num, col) => (
      <Tile
        key={(row + "." + col).toString()}
        num={num}
        clickX={row}
        clickY={col}
        handler={handler}
      />
    ));
  });

  return <div className="grid">{listItems}</div>;
}
