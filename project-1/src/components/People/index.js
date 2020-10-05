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
                    <td>{person.email}</td>
                    <td>{person.tel}</td>
                </tr>
            );
        })
    }

    render() {
        return(
            <div className="people-container">
               <table id="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPeople()}
                    </tbody>
                </table> 
            </div>
            
        );
    }
}

export default People;
