import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList.js"
import AnimalList from './animal/AnimalList';
import OwnerList from "./owner/OwnerList.js"


export default class ApplicationViews extends Component {  

   employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
]

locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
]

animalsFromAPI = [
    {id: 1, animal:"Dog" , name: "Foxy", color:"red", ownerId: 1},
    {id: 2, animal:"Dog" , name: "Colby", color:"blonde", ownerId: 2},
    {id: 3, animal:"Dog" , name: "Snoopy", color:"white", ownerId: 3}
]
ownersFromAPI = [
    { id: 1, name: "Ryan Tanay", phone: "555-555-5551"},
    { id: 2, name: "Emma Beaton", phone: "555-555-5552"},
    { id: 3, name: "Dani Adkins", phone: "555-555-5553"},
    { id: 4, name: "Adam Oswalt", phone: "555-555-5554"},
    { id: 5, name: "Fletcher Bangs", phone: "555-555-5555"},
    { id: 6, name: "Angela Lee", phone:"555-555-5556"}
]

state = {
    owners: this.ownersFromAPI,
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
}
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        );
    }
}