import React from 'react';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';

import Home from '../home/home';

class NavBar extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
           value: null,
       };
    }

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" onClick={() => this.props.changePage(Home.pages.home)}>nutab</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#courses" onClick={() => this.props.changePage(Home.pages.home)}>Courses</Nav.Link>
                        <Nav.Link href="#cse224" onClick={() => this.props.changePage(Home.pages.cse224)}>CSE224</Nav.Link>
                        <Nav.Link href="#gcal">My Calendar</Nav.Link>
                        <Nav.Link href="https://www.pexels.com/search/ocean/">Images</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default NavBar;