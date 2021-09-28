import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Logos/Header';


function App() {
  return (
    <div>
       {/*<Switch>*/}
        <Route path = '/' component={Header} /> 
        {/*</Switch>*/}
    </div>
  );
}

export default App;
