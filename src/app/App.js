
//import from node_modules
import React from "react";

//default import
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

import Cart from "./cart/components/Cart";

export class App extends React.Component {
    //keyword
    //return a virtual DOM
    render() {
        //JSX
        return (
            <div>
                <Header  title="React App" />
                
                {/* view container */}
                <div>
                     {this.props.children}
                </div>

                <Footer year={2017} company="React App" >
                    <p>Contact Time: 9:00 to 5:00 PM</p>
                    <p>Address: Delhi</p>
                </Footer>
            </div>
        )
        
    }
}