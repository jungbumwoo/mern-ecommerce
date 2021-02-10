import React from 'react';
import './App.css';
import HomePage from './container/Homepage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductListPage from './container/ProductListPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
