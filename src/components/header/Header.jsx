import React, { Component } from 'react';
import { Button, FormControl, Nav, Navbar, Form, NavLink } from 'react-bootstrap';
import { FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BarreRecherche from './BarreRecherche';

import alo from './../../asset/allomov.png';


class Header extends Component {

    render() {
        return (
            <header >

                <Navbar bg="dark" variant="dark" expand="lg">
                    <img src={alo} width="3%" alt=""/>
                    <Navbar.Brand href="/" >   AlloMoviE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            {/* pour que le lien passe sans rafraichir : mettre le as  */}
                            <Nav.Link as={Link} exact to='/' activeClassName='text-muted' >Accueil</Nav.Link>
                            <Nav.Link as={Link} to="/favoris" activeClassName='text-muted'> <FaHeartbeat variant="primary" />  Mes favoris</Nav.Link>
                        </Nav>
                        <BarreRecherche updateMovies={this.props.updateMovies} loaded={this.props.loaded} />
                    </Navbar.Collapse>
                </Navbar>

            </header>
        );
    }
}

export default Header;

