import React from "react";
import array from "./images.json";
import "./App.css";
import { GridView } from "./components/gridView";
import { LargeImage } from "./components/largeImage";

class App extends React.Component {
  state = {
    open: false,
    currentImage: {},
  };

  arrayToPass: PhotoObject[] = array;

  render() {
    return !this.state.open ? (
      <GridView {...this.arrayToPass} />
    ) : (
      <LargeImage {...this.arrayToPass[0]} />
    );
  }
}

export default App;

export interface PhotoObject {
  id: string;
  name: string;
  description: string;
  url: string;
}
