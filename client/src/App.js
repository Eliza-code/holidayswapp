import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import GMap from './components/GoogleMaps/Map.js'
import Announcements from './components/CityReservation/Announcements';
import Footer from './components/Footer/Footer';

//User
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/home' component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path = '/googleMap' component={GMap}/>
          <Route exact path = '/announcements' component={Announcements}/>
        </Switch>
    </div>
  );
}

export default App;
