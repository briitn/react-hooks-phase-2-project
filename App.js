
import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import Explore from './Explore';
import Tickets from './Tickets';
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
        <Route exact path="/explore">
          <Explore  africa={africa} setCountry={setCountry}/>
        </Route>
        <Route exact path="/tickets">
          <Tickets world={countryList}  country={country}
       setCountry={setCountry} />
        </Route>
       </Switch>
     
    </div>
  );
}

export default App;
