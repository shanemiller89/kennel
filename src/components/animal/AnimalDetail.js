import React, { Component } from "react";
import "./Animal.css";
import dog from "./DogIcon.svg";

export default class Animal extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="animal">
        <div key={this.props.animal.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={dog} className="icon--dog" alt="dog" />
              {this.props.animal.name}
            </h4>
            <div className="card-title">Breed: {this.props.animal.breed}</div>
            {this.props.owners.map(owner =>
              owner.id === this.props.animal.ownerId ? (
                <div key={owner.id}>Owner: {owner.name}</div>
              ) : (
                ""
              )
            )}
            <button
              className="card-title"
              onClick={() => {
                this.setState({ saveDisabled: true }, () =>
                  this.props.deleteAnimal(this.props.animal.id)
                );
              }}
              disabled={this.state.saveDisabled}
              className="card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}
