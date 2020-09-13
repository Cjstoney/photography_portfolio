import React from "react";
import { PhotoObject } from "../App";

export function LargeImage(props: PhotoObject) {
  return (
    <img
      key={props.id}
      src={props.url}
      alt={!!props.description ? props.description : "no description yet"}
    />
  );
}
