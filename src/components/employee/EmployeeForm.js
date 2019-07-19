import React, { Component } from 'react'

export default class EmployeeForm extends Component {
    state = {
        employeeName: "",
        position: ""
      };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

    constructNewEmployee = evt => {
        evt.preventDefault()
        const employee = {
            name: this.state.employeeName,
            position: this.state.position,
          };
          this.props.addEmployee(employee).then(() => this.props.history.push("/employees"));
        };
    

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
