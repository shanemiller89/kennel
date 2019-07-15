import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList.js"
import AnimalList from './animal/AnimalList';
import OwnerList from "./owner/OwnerList.js"
import SearchResults from "./search/SearchResults.js"
import API from "../modules/API.js"


export default class ApplicationViews extends Component {  

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
        API.delete("animals", id).then(animals => this.setState({animals: animals}))
    }
    
    deleteEmployee = (id) => {
        API.delete("employees", id).then(employees => this.setState({employees: employees}))
    }

    deleteOwner = (id) => {
        API.delete("owners", id).then(owners => this.setState({owners: owners}))
    }

    

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAnimal={this.deleteAnimal} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
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