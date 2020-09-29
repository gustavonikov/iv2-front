import React, { Component } from 'react';

import './index.css'

class People extends Component {
    constructor(props) {
        super();

        this.state = {
            people: [],
        }
    }

    getData() {
            fetch('http://localhost:8080/people')
                .then((res) => res.json())
                .then((res) => this.setState({
                    people: res,
                }));
        }
        
    componentDidMount() {
        this.getData();
    }

    renderPeople() {
        const peopleState = this.state.people;

        return peopleState.map((person) => {
            return (
                <tr key={person.id}>
                    <td>{person.name}</td>
                </tr>
            );
        })
    }

    render() {
        return(
            <table id="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPeople()}
                </tbody>
            </table>
        );
    }
}

export default People;
