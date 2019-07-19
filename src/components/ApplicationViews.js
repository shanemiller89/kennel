import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import { withRouter } from 'react-router'
import EmployeeList from "./employee/EmployeeList"
import EmployeeDetail from './employee/EmployeeDetail.js'
import EmployeeForm from './employee/EmployeeForm'
import LocationList from "./location/LocationList.js"
import LocationDetail from './location/LocationDetail'
import AnimalList from './animal/AnimalList';
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import OwnerList from "./owner/OwnerList.js"
import SearchResults from "./search/SearchResults.js"
import API from "../modules/API.js"


class ApplicationViews extends Component {  

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

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


    

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find( location =>
                        location.id === parseInt(props.match.params.locationId))
                    if (!location) {
                        location = {id:404, name:"404", address: "location not found"}
                        }
                    return <LocationDetail location={location} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                 // Find the animal with the id of the route parameter
                let animal = this.state.animals.find(animal =>
                animal.id === parseInt(props.match.params.animalId))
                 // If the animal wasn't found, create a default one
                if (!animal) {
                animal = {id:404, name:"404", breed: "Dog not found"}
                }
                 return <AnimalDetail animal={ animal } owners={this.state.owners} deleteAnimal={ this.deleteAnimal } />
                }} />
                <Route path="/animals/new" render={(props) => {
                return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find( employee =>
                        employee.id === parseInt(props.match.params.employeeId))
                    if (!employee) {
                        employee = {id:404, name:"404", position: "Employee not found"}
                        }
                    return <EmployeeDetail employee={employee} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                       addEmployee={this.addEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults />
                }} />
            </React.Fragment>
        );
    }
}

export default withRouter(ApplicationViews)