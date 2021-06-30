import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/detail">
          <p>detail</p>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
