import React from "react";
import { utils } from "./utils";

export const StarDisplay = (props) => (
  <>
    {utils.range(1, props.count).map((starID) => (
      <div key={starID} className="star"></div>
    ))}
  </>
);
