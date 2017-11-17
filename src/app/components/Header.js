import React, {Component} from "react";

import PropTypes from "prop-types";

export default class Header extends Component {
    constructor(props) {
        super(props);
        console.log("title ", props.title)
    }

    //ES.next, .babelrc stage-2 preset
    static propTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <hr />
            </div>
        )    
    }
}

