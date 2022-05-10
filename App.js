
import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Tour from './Tour';
import Pictures from './Pictures';
import NavBar from './NavBar';
import {countryList, africa} from './Data'
import {Route, Switch,} from 'react-router-dom'
function App() {
 const [country, setCountry]=useState("")
  return (
    <div className="App">


<NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/tour">
          <Tour  africa={africa} setCountry={setCountry}/>
        </Route>
        <Route exact path="/pictures">
          <Pictures world={countryList}
        />
        </Route>
       </Switch>
     
    </div>
  );
}

export default App;
