

import React from 'react';
import './App.css';
import HomePage from '../src/screen/HomePage';
import AuthPage from '../src/screen/AuthPage'

import { Route, BrowserRouter, Switch } from 'react-router-dom';;


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={AuthPage}  ></Route>
            <Route path="/Home" exact component={HomePage} ></Route>
          </Switch>


        </div>
      </BrowserRouter>
 
    </div>
  );
}

export default App;






