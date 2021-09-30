import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Google from './components/Google Maps/Map.js'

function App() {
  return (
    <div >
     
       <Switch>
        <Route exact path = '/home' component={Home} />
        <Route exact path = '/Google' component={Google}/>
        
        </Switch>
    </div>
  );
}

export default App;
