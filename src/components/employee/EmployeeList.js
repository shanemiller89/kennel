import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees">
        <h1>Employee List</h1>
        {this.props.employees.map(employee => (
          <div key={employee.id}>
            {employee.name}
            <br />
            <button onClick={() => this.props.deleteAny("employees", employee.id)}>
              Promote to Customer
            </button>
          </div>
        ))}
      </section>
    );
  }
}
