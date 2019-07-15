import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList.js"
import AnimalList from './animal/AnimalList';
import OwnerList from "./owner/OwnerList.js"
import SearchResults from "./search/SearchResults.js"


export default class ApplicationViews extends Component {  

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:8088/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:8088/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:8088/locations")
            .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:8088/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAny = (database, id) => {
        return fetch(`http://localhost:8088/${database}/${id}`, {
            method: "DELETE"
        })
        .then(animalData => animalData.json())
    //     .then(() => fetch(`http://localhost:8088/${database}`))
    //     .then(Data => Data.json())
    //     .then(animals => this.setState({database: animals})
    //   )
    }
    

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} deleteAny={this.deleteAny} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteAny={this.deleteAny} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteAny={this.deleteAny} />
                }} />
                <Route path="/search" render={(props) => {
                    return <SearchResults />
                }} />
            </React.Fragment>
        );
    }
}