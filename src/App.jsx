import { useState } from "react";
import Body from "./components/Body/Body";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


import "./App.css";

function App() {
  return (
    <div>
      <Body />
      <ItemListContainer />
    </div>
  );
}

export default App;

