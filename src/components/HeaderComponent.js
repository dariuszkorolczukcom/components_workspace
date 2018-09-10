import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark color="dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/widthslider'>12 step Width Slider</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/flexwidthslider'>Flex Width Slider</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/midislider'>Midi Slider</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>

            </div>
        );
    }
}

export default Header;