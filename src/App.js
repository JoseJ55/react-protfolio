import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <Navbar />
        </Route>
        <Route exact path="/detail">
          <p>detail</p>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
