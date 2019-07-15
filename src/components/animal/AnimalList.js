import React, { Component } from "react";
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalList extends Component {
  render() {
    return (
      <article className="animals">
        <h1>Animal List</h1>
        {this.props.animals.map(animal => (
          <div key={animal.id} className="card">
            <div className="card-body">
              <div className="card-title">
                <img src={dog} alt="dog" className="icon--dog" />
                <div>Name: {animal.name}</div>
                <div>Animal Type: {animal.animal}</div>
                <div>Color: {animal.color}</div>
                {this.props.owners.map(owner =>
                  owner.id === animal.ownerId ? (
                    <div key={owner.id}>Owner: {owner.name}</div>
                  ) : (
                    ""
                  )
                )}
                <button
                  onClick={() => this.props.deleteAnimal(animal.id)}
                  className="card-link"
                >
                  Delete
                </button>
                <br />
              </div>
            </div>
          </div>
        ))}
      </article>
    );
  }
}
