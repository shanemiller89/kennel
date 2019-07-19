import React, { Component } from "react";
import "./owner.css"

export default class OwnerList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ownerButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/owners/new");
            }}>
          New Customer
          </button>
        </div>
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
      </React.Fragment>
    );
  }
}
