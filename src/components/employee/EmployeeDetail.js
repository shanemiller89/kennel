import React, { Component } from "react";

export default class Employee extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="employee">
        <div>{this.props.employee.name}</div>
        <div>{this.props.employee.position}</div>
        <br />
        {
                <button
                onClick={() => {
                  this.setState({ saveDisabled: true }, () =>
                    this.props.deleteEmployee(this.props.employee.id)
                  );
                }}
                disabled={this.state.saveDisabled}>Delete
              </button>
        }
      </section>
    );
  }
}

// { <div key={this.props.employee.id}>
//     {this.props.employee.name}
//     <br />
    // <button
    //   onClick={() => {
    //     this.setState({ saveDisabled: true }, () =>
    //       this.props.deleteEmployee(this.props.employee.id)
    //     );
    //   }}
    //   disabled={this.state.saveDisabled}>Delete
    // </button>
//   </div>
// ))} }
