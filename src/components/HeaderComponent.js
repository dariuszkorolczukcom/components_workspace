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
                <Navbar dark color='dark' expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/widthslider'>12_step_Width_Slider</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/flexwidthslider'>Flex_Width_Slider</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/midislider'>Midi_Sound_Player</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/dailylimit'>Daily_Spend_Limit</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/video'>Video</NavLink>
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