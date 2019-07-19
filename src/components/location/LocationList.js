import React, { Component } from "react";
import { Link } from "react-router-dom";
import EmployeeCard from "../employee/EmployeeCard";
import "./location.css";

export default class LocationList extends Component {
  render() {
    return (
      <article className="locations">
        <h1>Kennels</h1>
        {this.props.locations.map(location => (
          <div key={location.id} className="card card--location">
            <h4>{location.name}</h4>
            <Link className="nav-link" to={`/locations/${location.id}`}>
              Details
            </Link>

            <div className="employees--location">
              {this.props.employees
                .filter(
                  employee => employee.locationId === location.id)
                .map(employee => (
                  <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    {...this.props}
                  />
                ))}
            </div>
          </div>
        ))}
        <h6 class="card-subtitle mb-2 text-muted">Employs:</h6>
        {/* <div className="employees--location">
                    {
                        this.props.employees
                            .filter(employee => employee.locationId === this.props.location.id)
                            .map(employee => <EmployeeCard key={employee.id} animal={employee} {...this.props} />)
                    }
                    </div> */}
      </article>
    );
  }
}

// <h6 class="card-subtitle mb-2 text-muted">Caretaker For</h6>
//                             <div className="animals--caretaker">
//                             {
//                                 this.props.animals
//                                     .filter(anml => anml.employeeId === employee.id)
//                                     .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
//                             }
//                             </div>
