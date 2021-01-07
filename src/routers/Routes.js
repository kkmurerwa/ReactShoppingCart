import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import ShoppingCart from "../components/ShoppingCart";

const Routes = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/cart" component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
    )
}

export default Routes;