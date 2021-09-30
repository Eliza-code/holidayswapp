import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Google from './components/Google Maps/Map.js'
import Announcements from './components/City Reservation/Anuncios';

//User
import Signup from './components/SignUp/Signup';


function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path = '/google' component={Google}/>
          <Route exact path = '/announcements' component={Announcements}/>
        </Switch>
    </div>
  );
}

export default App;
