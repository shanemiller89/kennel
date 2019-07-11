import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList.js"  // Import EmployeeList component
import AnimalList from './animal/AnimalList';


export default class Kennel extends Component {  

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
    {id: 1, animal:"Dog" , name: "Foxy", color:"red"},
    {id: 2, animal:"Dog" , name: "Colby", color:"blonde"},
    {id: 3, animal:"Dog" , name: "Snoopy", color:"white"}
]

state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI
}
    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <AnimalList  animals={this.state.animals}/>
                <EmployeeList employees={this.state.employees} />

            </article>
        );
    }
}