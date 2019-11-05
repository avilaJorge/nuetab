import React from 'react';
import { Nav } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="container">
            <p className="float-right"><Nav.Link href="https://reactjs.org/">Created using React.js</Nav.Link></p>
            <p className="float-left"><Nav.Link href="https://github.com/avilaJorge">By Jorge A Avila</Nav.Link></p>
        </footer>
    );
}

export default Footer;