import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Google from './components/GoogleMaps/Map.js'
import Announcements from './components/CityReservation/Announcements';
import Footer from './components/Footer/Footer';

//User
import Signup from './components/SignUp/Signup';
//import { Announcements } from './redux/actions/userActions';

function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/home' component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path = '/google' component={Google}/>
          <Route exact path = '/announcements' component={Announcements}/>
        </Switch>
    </div>
  );
}

export default App;
