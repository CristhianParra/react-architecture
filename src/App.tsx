import React from "react";
import { ItemDetail } from "./modules/items/components/item-detail";
import { ItemList } from "./modules/items/components/item-list";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ItemList />
      <ItemDetail />
    </div>
  );
}

export default App;
