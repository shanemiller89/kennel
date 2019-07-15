import React, { Component } from "react";

export default class OwnerList extends Component {
  render() {
    return (
      <section className="owners">
        <h1>Owner List</h1>
        {this.props.owners.map(owner => (
          <div key={owner.id}>
            <div>
              <strong>Name: </strong>
              {owner.name}
            </div>
            <div>{owner.phone}</div>
            <br />
            <button onClick={() => this.props.deleteOwner(owner.id)}>
              Leave Store
            </button>
          </div>
        ))}
      </section>
    );
  }
}
