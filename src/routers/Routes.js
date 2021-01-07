import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Home";
import ShoppingCart from "../components/ShoppingCart";

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
    )
}
 
export default Routes;