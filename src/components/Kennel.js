import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Kennel.css"


export default class Kennel extends Component {  

handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        console.log ("You entered")
    }
}

    render() {
        return (
            <React.Fragment>
                <NavBar handleKeyPress={this.handleKeyPress} />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}