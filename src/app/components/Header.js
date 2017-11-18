import React, {Component} from "react";

import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

import store from "../store";

export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log("title ", props.title)
    }

    //ES.next, .babelrc stage-2 preset
    static propTypes = {
        title: PropTypes.string
    }

    componentDidMount() {
        store.subscribe( ()=> {
            //calls render
            this.forceUpdate();
        })
    }

    render() {
        let state = store.getState();

        return (
            <div>
                <h2>{this.props.title}</h2>

                <NavLink to="/" exact className="button" 
                        activeClassName="success"  >
                    Home {state.counter}
                </NavLink>

                <NavLink to="/products"  className="button" 
                        activeClassName="success">
                    Products
                </NavLink>

                <NavLink to="/cart"  className="button"
                        activeClassName="success" >
                    Cart
                </NavLink>

                <NavLink to="/about"  className="button"
                        activeClassName="success"
                >
                    About
                </NavLink>

                <hr />
            </div>
        )    
    }
}

