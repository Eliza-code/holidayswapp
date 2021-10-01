import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import GMap from './components/GoogleMaps/Map.js'
import Announcements from './components/CityReservation/Announcements';
import HouseDetail from './components/HouseDetail/HouseDetail';
import Footer from './components/Footer/Footer';

//User
import Signup from './components/SignUp/Signup';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path = '/googleMap' component={GMap}/>
          <Route exact path = '/announcements' component={Announcements}/>
          <Route exact path = '/announcements/:id' component={HouseDetail}/>
          <Route exact path="/singin" component={SignIn} />
        </Switch>
    </div>
  );
}

export default App;
