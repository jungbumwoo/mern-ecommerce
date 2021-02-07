import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { isUserLoggedIn } from './actions';
import './App.css'
import PrivateRoute from './components/HOC/privateRoute';
import Home from './container/Home';
import Signin from './container/Signin';
import Signup from './container/Signup';



function App() {

  const dispatch = useDispatch();
  const auth  = useSelector(state => state.auth)

  useEffect(()=> {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    dispatch(isUserLoggedIn());
  }, [])
  
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
  );
}

export default App;
