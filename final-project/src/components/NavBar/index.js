import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import Home from '../Home';
import ListProducts from '../ListProducts';
import AddProduct from '../AddProduct';

class NavBar extends Component {
    render () {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Link className="mr-4 font-weight-bold text-decoration-none" to="/">Página Inicial</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown className="font-weight-bold" title="Produtos" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/addProduct">Entrada de Produtos</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/listProducts">Listar Produtos</Link></NavDropdown.Item>
                            </NavDropdown>
                            {/* 
                                <NavDropdown title="Relatorios" id="basic-nav-dropdown">
                                    <NavDropdown.Item> <Link to="/outputReport">Relatório de Saída</Link></NavDropdown.Item>
                                    <NavDropdown.Item> <Link to="/inputReport">Relatório de Entrada</Link></NavDropdown.Item>
                                </NavDropdown>
                            */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route exact path="/" component={Home} />
                <Route path="/listProducts" component={ListProducts} />
                <Route path="/addProduct" component={AddProduct} />
                <Route path="/productOutput" />
                <Route path="/outputReport" />
                <Route path="/inputReport" />

            </BrowserRouter>
        );
    }
}

export default NavBar;
