import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Google from './components/Google Maps/Map.js'
import Anuncios from './components/City Reservation/Anuncios';

function App() {
  return (
    <div >
     
       <Switch>
        <Route exact path = '/home' component={Home} />
        <Route exact path = '/Google' component={Google}/>
        <Route exact path = '/Anuncios' component={Anuncios}/>
        
        </Switch>
    </div>
  );
}

export default App;
