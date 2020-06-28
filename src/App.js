import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from './Components/Navigation.jsx'
import Resume from './Views/Resume/Resume.jsx';
import Home from './Components/Home.jsx';
import Projects from './Views/Projects/Projects.jsx';



function App() {
  return (
    <BrowserRouter>

      <Navigation />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Resume">
          <Resume />
        </Route>

        <Route exact path="/Projects">
          <Projects />
        </Route>

      </Switch>
    </BrowserRouter>

  );
}

export default App;
