import React, { Component} from 'react'

export default class AnimalList extends Component {
    

    
    render() {
        return (
            <article>
                <h1>Animal List</h1>
                {
                    this.props.animals.map(animal => 
                        <div key={animal.id}>
                            <div>Name: {animal.name}</div>
                            <div>Animal Type: {animal.animal}</div>
                            <div>Color: {animal.color}</div>
                            {
                                this.props.owners.map(owner =>
                                    owner.id === animal.ownerId ? <div key={owner.id}>Owner: {owner.name}</div> : ""
                                    )
                            }
                            <br />
                        </div>
                        )
                    }
            </article>
        );
    }
}
