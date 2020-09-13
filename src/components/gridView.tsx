import React from "react";
import { PhotoObject } from "../App";

export function GridView(props: PhotoObject[]) {
  const imageLIst = props.map(({ id, description, url }: PhotoObject) => {
    const onclick = () => {
      // this needs to pass out the boolean flip and the object that was clicked
      console.log({ id, description, url } as PhotoObject);
    };
    return (
      <img
        key={id}
        src={url}
        alt={!!description ? description : "no description"}
        onClick={onclick}
      />
    );
  });
  return <div className="image-list">{imageLIst}</div>;
}
