import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import EmployeeList from "./employee/EmployeeList"
import EmployeeDetail from './employee/EmployeeDetail.js'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationList from "./location/LocationList.js"
import LocationDetail from './location/LocationDetail'
import AnimalList from './animal/AnimalList';
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import OwnerList from "./owner/OwnerList.js"
import OwnerForm from "./owner/OwnerForm"
import SearchResults from "./search/SearchResults.js"
import Login from './authentication/Login'
import API from "../modules/API.js"


class ApplicationViews extends Component {  

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    componentDidMount() {
        const newState = {}
    
        API.getAll("animals")
            .then(animals => newState.animals = animals)
            .then(() => API.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() => API.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() => API.getAll("owners"))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = (id) => {
        API.delete("animals", id)
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })
    }
    
    deleteEmployee = (id) => {
        API.delete("employees", id)
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({employees: employees})
        })
    }

    deleteOwner = (id) => {
        API.delete("owners", id).then(owners => this.setState({owners: owners}))
    }

    updateAnimal = (editedAnimalObject) => {
        return API.put("animals", editedAnimalObject)
        .then(() => API.getAll("animals"))
        .then(animals => {
          this.setState({
            animals: animals
          })
        });
      };

    updateEmployee = (editedEmployeeObject) => {
        return API.put("employees", editedEmployeeObject)
        .then(() => API.getAll("employees"))
        .then(employees => {
          this.setState({
            employees: employees
          })
        });
      };

    addAnimal = animal =>
        API.post("animals", animal)
        .then(() => API.getAll("animals"))
        .then(animals => 
            this.setState({animals: animals}))
    
    addEmployee = employee =>
        API.post("employees", employee)
        .then(() => API.getAll("employees"))
        .then(employees =>
            this.setState({employees: employees}))
    
    addOwner = owner =>
        API.post("owners", owner)
        .then(() => API.getAll("owners"))
        .then(owners =>
            this.setState({owners: owners}))
    


    

    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                if (this.isAuthenticated()) {
                    return <LocationList animals={this.state.animals} locations={this.state.locations} employees={this.state.employees} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                if (this.isAuthenticated()) {
                    let location = this.state.locations.find( location =>
                        location.id === parseInt(props.match.params.locationId))
                    if (!location) {
                        location = {id:404, name:"404", address: "location not found"}
                        }
                    return <LocationDetail location={location} />
                } else {
                    return <Redirect to ="/login" />
                }
                }} />
                <Route exact path="/animals" render={(props) => {
                if (this.isAuthenticated()) {
                    return <AnimalList {...props} animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                if (this.isAuthenticated()) {
                 // Find the animal with the id of the route parameter
                let animal = this.state.animals.find(animal =>
                animal.id === parseInt(props.match.params.animalId))
                 // If the animal wasn't found, create a default one
                if (!animal) {
                animal = {id:404, name:"404", breed: "Dog not found"}
                }
                 return <AnimalDetail animal={ animal } owners={this.state.owners} deleteAnimal={ this.deleteAnimal } />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route
                    exact path="/animals/:animalId(\d+)/edit" render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                    }}
                />
                <Route path="/animals/new" render={(props) => {
                if (this.isAuthenticated()) {
                return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                    return <EmployeeList {...props} animals={this.state.animals} employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                if (this.isAuthenticated()) {
                    let employee = this.state.employees.find( employee =>
                        employee.id === parseInt(props.match.params.employeeId))
                    if (!employee) {
                        employee = {id:404, name:"404", position: "Employee not found"}
                        }
                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} animals={this.state.animals} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route
                exact path="/employees/:employeeId(\d+)/edit" render={props => {
                return <EmployeeEditForm {...props} locations={this.state.locations} updateEmployee={this.updateEmployee}/>
                }}
                />
                <Route path="/employees/new" render={(props) => {
                if (this.isAuthenticated()) {
                    return <EmployeeForm {...props}
                    locations={this.state.locations}
                       addEmployee={this.addEmployee} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route exact path="/owners" render={(props) => {
                if (this.isAuthenticated()) {
                    return <OwnerList {...props} owners={this.state.owners} deleteOwner={this.deleteOwner} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route path="/owners/new" render={(props) => {
                if (this.isAuthenticated()) {
                    return <OwnerForm {...props}
                       addOwner={this.addOwner} animals={this.state.animals} />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
                <Route path="/search" render={(props) => {
                if (this.isAuthenticated()) {
                    return <SearchResults />
                } else {
                    return <Redirect to="/login" />
                }
                }} />
            </React.Fragment>
        );
    }
}

export default withRouter(ApplicationViews)