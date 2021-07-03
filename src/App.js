import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/project">
          <Project />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
