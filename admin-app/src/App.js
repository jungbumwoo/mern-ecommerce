import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getAllCategory, isUserLoggedIn } from './actions';
import { getInitialData } from './actions/initialData.action';
import './App.css'
import PrivateRoute from './components/HOC/privateRoute';
import Category from './container/Category';
import Home from './container/Home';
import NewPage from './container/NewPage';
import Orders from './container/Orders';
import Products from './container/Products';
import Signin from './container/Signin';
import Signup from './container/Signup';



function App() {

  const dispatch = useDispatch();
  const auth  = useSelector(state => state.auth)

  //componentDidmount or componentDidUpdate
  useEffect(()=> {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);
  
  return (
    <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/page" component={NewPage}/>
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
