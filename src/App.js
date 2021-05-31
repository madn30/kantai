import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Component/Homepage"
import Camera from "./Component/Camera"
import Finish from "./Component/Finish"
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/camera" component={Camera} />
      <Route path="/finish" component={Finish} />

    </Router>
  );
}

export default App;
