import React, { Component } from "react";
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg";
import "./Animal.css";

export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animalButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new");
            }}>
            Admit Animal
          </button>
        </div>
        <article className="animals">
          <h1>Animal List</h1>
          {this.props.animals.map(animal => (
            <div key={animal.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <img src={dog} alt="dog" className="icon--dog" />
                  <div>Name: {animal.name}</div>
                  <Link className="nav-link" to={`/animals/${animal.id}`}>
                    Details
                  </Link>
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
      </React.Fragment>
    );
  }
}
