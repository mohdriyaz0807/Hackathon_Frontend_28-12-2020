import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Login,String} from './components/User/login'
import Register from './components/User/Register'
import Forgot from './components/User/ForgotPassword'
import Dashboard from './components/Dashboard/Dashboard'
import Reset from './components/User/ResetPassword'
import Home from './components/Home/Home'
import {Admin,Strings} from './components/Admin/Admin'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error-404/404'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/Dashboard">
          <Dashboard/>
        </Route>
        <Route path="/Register/admin">
          <Register/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route exact path="/ForgotPassword">
          <Forgot/>
        </Route>
        <Route exact path="/ForgotPassword/admin">
          <Forgot/>
        </Route>
        <Route exact path="/ResetPassword/admin/:string">
          <Reset/>
        </Route>
        <Route exact path="/ResetPassword/:string">
          <Reset/>
        </Route>
        <Route path="/String/:requiredString">
          <String/>
        </Route>
        <Route path="/Strings/:requiredString">
          <Strings/>
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
