import React, { Component } from 'react'


export default class LocationList  extends Component {
    render() {
        return (
            <article>
                <h1>Student Kennels</h1>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h4>{location.name}</h4>
                            <p>{location.address}</p>
                        </div>
                        )
                }
            </article>
        );
    }
}
