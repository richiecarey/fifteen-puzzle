import React, { useState } from "react";
import "./Tile.css";

export default function Tile(props) {
  //const [point, setPoint] = useState(props.point);
  //console.log(point);
  return (
    <button
      className={props.num ? "square" : "blank"}
      onClick={() => props.handler(props.clickX, props.clickY)}
    >
      {props.num ? props.num : ""}
    </button>
  );
}
