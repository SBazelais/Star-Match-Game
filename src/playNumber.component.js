import React from "react";
import { colors } from "./colors.js";

export const PlayNumber = (props) => (
  <button
    className="number"
    style={{ backgroungColor: colors[props.status] }}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);
