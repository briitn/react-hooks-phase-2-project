
import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Tour from './Tour';
import Pictures from './Pictures';
import NavBar from './NavBar';
import {countryList, africa} from './Data'
import {Route, Switch,} from 'react-router-dom'
function App() {
 
  return (
    <div className="App">


<NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tour">
          <Tour  />
        </Route>
        <Route exact path="/pictures">
          <Pictures 
        />
        </Route>
       </Switch>
     
    </div>
  );
}

export default App;
