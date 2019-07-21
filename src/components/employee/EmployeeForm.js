import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    state = {
        employeeName: "",
        position: "",
        locationId: ""
      };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

        constructNewEmployee = evt => {
          evt.preventDefault();
          if (this.state.location === "") {
            window.alert("Please select a location");
          } else {
            const employee = {
              name: this.state.employeeName,
              position: this.state.position,
              locationId: parseInt(this.state.locationId)
            };
            this.props.addEmployee(employee).then(() => this.props.history.push("/employees"));
          }; 
        }
        

    render() {
        return (
            <React.Fragment>
            <form className="EmployeeForm">
              <div className="form-group">
                <label htmlFor="employeeName">Employee name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="employeeName"
                  placeholder="Employee name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="position"
                  placeholder="position"
                />
              </div>
              <div className="form-group">
              <label htmlFor="employee">Assign Location</label>
              <select
                name="employee"
                id="employeeId"
                onChange={this.handleFieldChange}
                value = {this.state.locationId}
              >
                <option value="">Select an location</option>
                {this.props.locations.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
              <button
                type="submit"
                onClick={this.constructNewEmployee}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </React.Fragment>
        )
    }
}
