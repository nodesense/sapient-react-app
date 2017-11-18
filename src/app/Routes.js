import React from "react";

import {
    BrowserRouter as Router, 
    Switch,
    Route
} from "react-router-dom";

import {App} from "./App";

import Home from "./components/Home";
import About from "./components/About";
import Cart from "./cart/components/Cart";

import NotFound from "./components/NotFound";

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}