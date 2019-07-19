import React, { Component } from "react";
import { Link } from "react-router-dom";
import person from "./person.png";
import AnimalCard from "../animal/AnimalCard"
import "./employee.css";

export default class EmployeeCard extends Component {
  render() {
    return (
      <section className="employees">
          <div key={this.props.employee.id} className="card card--employee">
            <div className="card-body">
              <div className="card-title">
                <img src={person} className="icon--employee" alt="employee" />
                <h5>{this.props.employee.name}</h5>
                <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>
                  Details
                </Link>
              </div>

              <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
              <div className="animals--caretaker">
                {this.props.animals
                  .filter(anml => anml.employeeId === this.props.employee.id)
                  .map(anml => (
                    <AnimalCard key={anml.id} animal={anml} {...this.props} />
                  ))}
              </div>
            </div>
          </div>
      </section>
    );
  }
}

