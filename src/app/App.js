
//import from node_modules
import React from "react";

//default import
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

export class App extends React.Component {
    //keyword
    //return a virtual DOM
    render() {
        //JSX
        return (
            <div>
                <Header  title="React App" />
                <Home />
                <About />
                <Footer year={2017} company="React App" />
            </div>
        )
        
    }
}