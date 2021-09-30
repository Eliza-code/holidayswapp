import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

//User
import Signup from './components/SignUp/Signup';

function App() {
  return (
    <div >
     
       <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path="/register" component={Signup} />
        </Switch>
    </div>
  );
}

export default App;
