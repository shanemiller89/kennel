import React, { Component } from "react"
import API from "../../modules/API"

export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      employeeName: "",
      position: "",
      locationId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()

      if (this.state.location === "") {
        window.alert("Please select a location");
      } else {
        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.employeeName,
          position: this.state.position,
          locationId: parseInt(this.state.locationId)
        };

    this.props.updateEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees"))      
    }
  }

    componentDidMount() {
      API.get("employees", this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,
          position: employee.position,
          locationId: employee.locationId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value = {this.state.employeeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="breed">Position</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value = {this.state.position}
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
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}