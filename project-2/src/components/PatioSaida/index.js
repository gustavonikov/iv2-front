/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
import React, { Component } from 'react';

import './index.css';

class PatioSaida extends Component {
    constructor(props) {
        super();

        this.state = {
            parkedCars: [],
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('http://localhost:8080/parked-cars')
            .then((res) => res.json())
            .then((res) => this.setState({
                parkedCars: res,
            }));
    }

    currentMoment() {
        const nE = this.state;
        console.log(nE);

        const currentMomentValue = new Date();
        const day = currentMomentValue.getDate() < 10 ? `0${currentMomentValue.getDate()}` : currentMomentValue.getDate();
        const month = currentMomentValue.getMonth() < 10 ? `0${currentMomentValue.getMonth()}` : currentMomentValue.getMonth();
        const hours = currentMomentValue.getHours() < 10 ? `0${currentMomentValue.getHours()}` : currentMomentValue.getHours();
        const minutes = currentMomentValue.getMinutes() < 10 ? `0${currentMomentValue.getMinutes()}` : currentMomentValue.getMinutes();
        const seconds = currentMomentValue.getSeconds() < 10 ? `0${currentMomentValue.getSeconds()}` : currentMomentValue.getSeconds();

        const currentMomentAdjusted = `${day}/${month}/${currentMomentValue.getFullYear()} ${hours}:${minutes}:${seconds}`;

        return currentMomentAdjusted;
    }

    changeStatus(selectedCar) {
        const { parkedCars: carsState } = this.state;

        const carsThatLeft = {
            placa: selectedCar.placa,
            cor: selectedCar.cor,
            marca: selectedCar.marca,
            modelo: selectedCar.modelo,
            momento_de_entrada: selectedCar.momento_de_entrada,
            momento_de_saida: this.currentMoment(),
            status: 'false',
        };

        fetch(`http://localhost:8080/parked-cars/${selectedCar.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carsThatLeft),
        }).then(() => {
            carsState.forEach((carState) => {
                if (carState.id === selectedCar.id) {
                    if (carState.status === 'false') {
                        carState.status = 'true';
                    } else {
                        carState.status = 'false';
                    }
                    this.setState({
                        parkedCars: carsState,
                    });
                }
            });
        });
    }

    renderCars() {
        const { parkedCars } = this.state;

        // eslint-disable-next-line consistent-return
        return parkedCars.map((carInfo) => {
            if (carInfo.status === 'true') {
                return (
                    <tr>
                        <td>{carInfo.placa}</td>
                        <td>{carInfo.modelo}</td>
                        <td>{carInfo.marca}</td>
                        <td>{carInfo.cor}</td>
                        <td>{carInfo.momento_de_entrada}</td>
                        <td><button type="button" onClick={() => this.changeStatus(carInfo)} className="btn btn-success center-button">Saída</button></td>
                    </tr>
                );
            }
        });
    }

    render() {
        return (
            <div id="parking-cars">
                <div>
                    <h4>Carros estacionados</h4>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Placa</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Cor</th>
                                <th scope="col">Momento de entrada</th>
                                <th scope="col">Atualizar status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderCars()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default PatioSaida;
