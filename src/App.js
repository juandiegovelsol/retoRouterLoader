import React from "react";
import { CustomRouter } from "./router";
import "./App.scss";
import { Context, initialContext } from "./context";
function App() {
  return (
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  );
}

export default App;
