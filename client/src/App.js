import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div >
     
       <Switch>
        <Route exact path = '/home' component={Home} />
        </Switch>
    </div>
  );
}

export default App;
