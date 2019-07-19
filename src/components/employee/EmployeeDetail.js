import React, { Component } from "react";
import AnimalCard from "../animal/AnimalCard"
import person from "./person.png";
import "./employee.css";

export default class Employee extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="employee">
        <div key={this.props.employee.id} className="card card--employee">
          <img src={person} className="icon--employee" alt="employee" />
          <div>{this.props.employee.name}</div>
          <div>{this.props.employee.position}</div>
          <br />
          <div className="animals--caretaker">
            {this.props.animals
              .filter(anml => anml.employeeId === this.props.employee.id)
              .map(anml => (
                <AnimalCard key={anml.id} animal={anml} {...this.props} />
              ))}
          </div>
          {
            <button
              onClick={() => {
                this.setState({ saveDisabled: true }, () =>
                  this.props.deleteEmployee(this.props.employee.id)
                );
              }}
              disabled={this.state.saveDisabled}
            >
              Delete
            </button>
          }
        </div>
      </section>
    );
  }
}

// { <div key={this.props.employee.id}>
//     {this.props.employee.name}
//     <br />
// <button
//   onClick={() => {
//     this.setState({ saveDisabled: true }, () =>
//       this.props.deleteEmployee(this.props.employee.id)
//     );
//   }}
//   disabled={this.state.saveDisabled}>Delete
// </button>
//   </div>
// ))} }
