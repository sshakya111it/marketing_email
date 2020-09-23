import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Appbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./components/layout/AddProduct";
import AddCustomer from "./components/layout/AddCustomer";
import SignOut from "./components/auth/SignOut";
import NotFound from "./components/layout/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Appbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/home" component={Dashboard} />
            <Route path="/addproduct" component={AddProduct} />
            <Route path="/addcustomer" component={AddCustomer} />
            <Route path="/signout" component={SignOut} />
            <Route component= {NotFound}/>
          </Switch>
      </Router>
    );
  }
}
export default App;
