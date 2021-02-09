import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllCategory, isUserLoggedIn } from './actions';
import './App.css'
import PrivateRoute from './components/HOC/privateRoute';
import Category from './container/Category';
import Home from './container/Home';
import Orders from './container/Orders';
import Products from './container/Products';
import Signin from './container/Signin';
import Signup from './container/Signup';



function App() {

  const dispatch = useDispatch();
  const auth  = useSelector(state => state.auth)

  useEffect(()=> {
    if(!auth.authenticate){
        dispatch(isUserLoggedIn());
    }
    dispatch(getAllCategory());
  }, [])
  
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/category" component={Category}/>
          <PrivateRoute path="/products" component={Products}/>
          <PrivateRoute path="/orders" component={Orders}/>

          
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
  );
}

export default App;
