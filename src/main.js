// bootstraping

import React from "react";

import {render} from "react-dom";

//import {App} from "./app/App";

//bind virtual dom to real dom

//render => diffing, patching real dom

import Routes from "./app/Routes";

import store from "./app/store";

render( <Routes />, //virtual dom
        document.getElementById("root") //real dom
)