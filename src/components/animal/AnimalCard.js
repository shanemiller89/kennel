import React, { Component } from "react";
import { Link } from "react-router-dom";
import dog from "./DogIcon.svg";
import "./Animal.css";

export default class AnimalCard extends Component {
  render() {
    return (
      <div key={this.props.animal.id} className="card">
        <div className="card-body">
          <div className="card-title">
            <img src={dog} className="icon--dog" alt="dog" />
            <h5>{this.props.animal.name}</h5>
            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>
              Details
            </Link>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                this.props.history.push(
                  `/animals/${this.props.animal.id}/edit`
                );
              }}
            >
              Edit
            </button>
            <Link
              onClick={() => this.props.deleteAnimal(this.props.animal.id)}
              className="card-link"
            >
              Discharge
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// <article className="animals">
// <h1>Animal List</h1>
// {this.props.animals.map(animal => (
//   <div key={animal.id} className="card">
//     <div className="card-body">
//       <div className="card-title">
//         <img src={dog} alt="dog" className="icon--dog" />
//         <div>Name: {animal.name}</div>
//         <Link className="nav-link" to={`/animals/${animal.id}`}>
//           Details
//         </Link>
//         <button
//           onClick={() => this.props.deleteAnimal(animal.id)}
//           className="card-link"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   </div>
// ))}
// </article>
