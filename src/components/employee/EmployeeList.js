import React, { Fragment, Component } from "react";
import EmployeeCard from "./EmployeeCard"
import { Link } from "react-router-dom";
import person from "./person.png";
import AnimalCard from "../animal/AnimalCard";
import "./employee.css";

export default class EmployeeList extends Component {
  render() {
    return (
      <Fragment>
        <div className="employeeButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/employees/new");
            }}
          >
            Hire Employee
          </button>
        </div>
        <section className="employees">
          {this.props.employees.map(employee => (
            <div>
            <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                  <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
                  <div className="animals--caretaker">
                    {this.props.animals
                      .filter(anml => anml.employeeId === employee.id)
                      .map(anml => (<AnimalCard key={anml.id} animal={anml} {...this.props} />
                      ))}
                  </div>
              </div>
          ))}
        </section>
      </Fragment>
    );
  }
}
