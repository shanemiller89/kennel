import React,{ Fragment, Component } from "react";
import { Link } from "react-router-dom";
import './employee.css'

export default class EmployeeList extends Component {
  render() {
    return (
      <Fragment>
        <div className="employeeButton">
          <button type="button"
            className="btn btn-success"
            onClick={() => {
            this.props.history.push("/employees/new")}
          }>
           Hire Employee
          </button>
        </div>
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
      </Fragment>
    );
  }
}
