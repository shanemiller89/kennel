import React, { Component } from "react";


export default class Location extends Component {
  render() {
    return (
      <section className="location">
           <h4>{this.props.location.name}</h4>
           <p>{this.props.location.address}</p>
      </section>
    );
  }
}