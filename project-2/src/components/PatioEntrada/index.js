/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import './index.css';

class PatioEntrada extends Component {
    constructor(props) {
        super();

        this.state = {
            placa: '',
            cor: '',
            marca: '',
            modelo: '',
            momento_de_entrada: '',
        };
    }

    currentMoment() {
        const currentMomentValue = new Date();
        const day = currentMomentValue.getDate() < 10 ? `0${currentMomentValue.getDate()}` : currentMomentValue.getDate();
        const month = currentMomentValue.getMonth() < 10 ? `0${currentMomentValue.getMonth()}` : currentMomentValue.getMonth();
        const hours = currentMomentValue.getHours() < 10 ? `0${currentMomentValue.getHours()}` : currentMomentValue.getHours();
        const minutes = currentMomentValue.getMinutes() < 10 ? `0${currentMomentValue.getMinutes()}` : currentMomentValue.getMinutes();
        const seconds = currentMomentValue.getSeconds() < 10 ? `0${currentMomentValue.getSeconds()}` : currentMomentValue.getSeconds();

        const currentMomentAdjusted = `${day}/${month}/${currentMomentValue.getFullYear()} ${hours}:${minutes}:${seconds}`;

        return (
            this.setState({
                momento_de_entrada: currentMomentAdjusted,
            })
        );
    }

    insertCar() {
        const carToAdd = this.state;

        const entryCarObject = {
            placa: carToAdd.placa,
            cor: carToAdd.cor,
            marca: carToAdd.marca,
            modelo: carToAdd.modelo,
            momento_de_entrada: carToAdd.momento_de_entrada,
            momento_de_saida: '',
            status: 'true',
        };

        fetch('http://localhost:8080/parked-cars', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entryCarObject),
        }).then(() => {
            this.setState({
                placa: '',
                cor: '',
                marca: '',
                modelo: '',
                momento_de_entrada: '',
            });
        });

        // eslint-disable-next-line no-alert
        alert('Entrada feita com sucesso!');
    }

    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    render() {
        return (
            <div id="cars-entry">
                <div>
                    <h4 className="mb-3">Entrada de Veículos</h4>
                </div>
                <div className="col-md-5 d-flex flex-column mw-100 align-items-center m-0">
                    <div className="col-md-3">
                        <span>Placa</span>
                        <input type="text" onChange={(event) => { this.changeState(event); this.currentMoment(); }} value={this.state.placa} name="placa" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <span>Cor</span>
                        <input type="text" onChange={(event) => this.changeState(event)} value={this.state.cor} name="cor" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <span>Marca</span>
                        <input type="text" onChange={(event) => this.changeState(event)} value={this.state.marca} name="marca" className="form-control" />
                    </div>

                    <div className="col-md-3">
                        <span>Modelo</span>
                        <input type="text" onChange={(event) => this.changeState(event)} value={this.state.modelo} name="modelo" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <span>Momento de entrada</span>
                        <input type="text" onChange={(event) => this.changeState(event)} value={this.state.momento_de_entrada} readOnly name="momento-de-entrada" className="form-control" />
                    </div>
                    <div className="col-md-2 mt-4">
                        <button type="button" onClick={() => this.insertCar()} className="btn btn-success w-100">Entrada</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default PatioEntrada;
