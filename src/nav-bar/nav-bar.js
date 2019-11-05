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
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                    <Navbar.Text>
                        Signed in as:
                    </Navbar.Text>
                </Navbar>
            </>
        );
    }
}

export default NavBar;