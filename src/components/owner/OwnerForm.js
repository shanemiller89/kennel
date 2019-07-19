import React, { Component } from 'react'

export default class OwnerForm extends Component {
    // Set initial state
state = {
  ownerName: "",
  phone: "",
  animalId: ""
};

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    constructNewOwner = evt => {
      evt.preventDefault();
      if (this.state.employee === "") {
        window.alert("Please select your animal!");
      } else {
        const owner = {
          name: this.state.ownerName,
          phone: this.state.phone,
          // Make sure the employeeId is saved to the database as a number since it is a foreign key.
          animalId: parseInt(this.state.animalId)
        };
  
        // Create the animal and redirect user to animal list
        this.props.addOwner(owner).then(() => this.props.history.push("/owners"));
      }
    };    

  render() {
      return (
          <React.Fragment>
            <form className="ownerForm">
              <div className="form-group">
                <label htmlFor="ownerName">Owner name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="ownerName"
                  placeholder="Owner name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone #</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="phone"
                  placeholder="555-555-5555"
                />
              </div>
              <div className="form-group">
                <label htmlFor="animal">Who's my dog again?</label>
                <select
                  defaultValue=""
                  name="animal"
                  id="animalId"
                  onChange={this.handleFieldChange}
                >
                  <option value="">Select your Animal</option>
                  {this.props.animals.map(animal => (
                    <option key={animal.id} id={animal.id} value={animal.id}>
                      {animal.name}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                onClick={this.constructNewOwner}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </React.Fragment>
      )
  }
}
