import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";

function App() {
  const [projectItems, setProjectItems] = useState([{name: '1'}, {name: '2'}, {name: '3'}]);

  return (
    // want to make the pages dynamic so only one page is needed and get data from database.
    <BrowserRouter>
      <div>
        {/* change the route id later on to make dynamic */}
        <Route exact path="/1"> 
          <Project1 id={1}/>
        </Route>
        <Route exact path="/2">
          <Project2 id={2}/>
        </Route>
        <Route exact path="/3">
          <Project3 id={3}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
