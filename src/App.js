import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
      <React.Fragment>
        <BrowserRouter>
          <Navbar data-test='abcd' />
          <Switch>
            <Route path='/' exact >
              <Redirect to="/categories/1" />
            </Route>
            <Route path='/categories/:catId' exact component={Home}  />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
