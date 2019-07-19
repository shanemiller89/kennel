import React, { Component } from "react";


export default class Location extends Component {
  render() {
    return (
      <section className="location">
          <div key={this.props.location.id} className="card card--location">
           <h4>{this.props.location.name}</h4>
           <p>{this.props.location.address}</p>
          </div>
      </section>
    );
  }
}