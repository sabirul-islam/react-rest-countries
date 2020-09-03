import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Nomatch from './components/Nomatch/Nomatch';
import Detail from './components/Detail/Detail';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/detail/:countryName'>
          <Detail></Detail>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
          <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
