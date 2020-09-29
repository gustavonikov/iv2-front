import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Patio from '../Patio';
import PatioEntrada from '../PatioEntrada';
import PatioSaida from '../PatioSaida';

import './index.css';

function NavBar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Parking Lot Iv2</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/entrada">Entrada<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/saida">Saída</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Route path="/" component={Patio} exact />
            <Route path="/entrada" component={PatioEntrada} />
            <Route path="/saida" component={PatioSaida} />
        </BrowserRouter>
    );
}

export default NavBar;
