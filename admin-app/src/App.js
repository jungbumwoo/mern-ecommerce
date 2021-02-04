import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
