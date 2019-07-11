import React, { Component} from 'react'

export default class AnimalList extends Component {
    render() {
        return (
            <article>
                <h1>Animal List</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id}>
                            <div><strong>Animal: </strong>{animal.animal}</div>
                            <div><strong>Name: </strong>{animal.name}</div>
                            <div><strong>Color: </strong>{animal.color}</div>
                            <br />
                        </div>
                        )
                }
            </article>
        );
    }
}