import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./Kennel.css"


export default class Kennel extends Component {  
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}