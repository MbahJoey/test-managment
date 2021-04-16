import React from "react";
import { Route } from "react-router-dom";

import TestPage from "./pages/testpage/testpage.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={TestPage} />
    </div>
  );
}

export default App;
