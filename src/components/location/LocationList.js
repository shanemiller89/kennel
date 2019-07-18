import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Student Kennels</h1>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h4>{location.name}</h4>
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </div>
                        )
                }
                
            </article>
        );
    }
}
