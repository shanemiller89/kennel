import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        <h1>Employee List</h1>
        {this.props.employees.map(employee => (
          <div key={employee.id}>
            {employee.name}
            <br />
            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
          </div>
        ))}
      </section>
    );
  }
}
