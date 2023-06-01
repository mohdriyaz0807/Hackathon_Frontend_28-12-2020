import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Error404 from "./components/Error-404/404";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";
import Login from "./components/Login/Login";
import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const [refresh,setrefresh] = useState(false)
  const [cart, setCart] = useLocalStorage('cart', [])
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    setrefresh(!refresh)
  },[cart])

  return (
    <Router>
      <Header cart={cart} openLogin={() => setOpen(true)}/>
      <Login open={open} closeModal={() => setOpen(false)}/>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/Dashboard" />} />
        <Route exact path="/Dashboard">
          <Dashboard cart={cart} setCart={setCart} />
        </Route>
        <Route exact path="/Cart">
          <Cart cart={cart} setCart={setCart} openLogin={() => setOpen(true)}/>
        </Route>
        <Route exact path="/Orders">
          <Orders />
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
