import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Navbar, Footer } from './components';
import {
  Main,
  Rent,
  Sale,
  News,
  AddPublication,
  PersonalPanel,
  Registration,
  Login
} from './pages';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container main-container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/sale">
            <Sale />
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/add-publication">
            <AddPublication />
          </Route>
          <Route path="/personal-panel">
            <PersonalPanel />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
