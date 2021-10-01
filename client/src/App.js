import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

//User
import Signup from './components/SignUp/Signup';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/singin" component={SignIn} />
        </Switch>
    </div>
  );
}

export default App;
