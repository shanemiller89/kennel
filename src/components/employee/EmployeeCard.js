import React, { Component } from "react";
import { Link } from "react-router-dom";
import person from "./person.png";
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
              <Link
                className="nav-link"
                to={`/employees/${this.props.employee.id}`}
              >
                Details
              </Link>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  this.props.history.push(
                    `/employees/${this.props.employee.id}/edit`
                  );
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
