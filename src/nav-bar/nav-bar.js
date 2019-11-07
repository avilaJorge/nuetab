import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import {useUser} from "reactfire";

import Home from '../home/home';
import './nav-bar.css';

function GooglePhoto() {
    return (
        <img className="usr-photo float-right" src={useUser().photoURL} />
    );
}

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
                <Navbar bg="dark" className="justify-content-between" variant="dark">
                    <Navbar.Brand href="#home" onClick={() => this.props.changePage(Home.pages.home)}>nutab</Navbar.Brand>
                    <GooglePhoto />
                </Navbar>
            </>
        );
    }
}

export default NavBar;