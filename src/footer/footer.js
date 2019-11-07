import React from 'react';
import { Nav } from 'react-bootstrap';
import 'bootstrap'

function Footer() {
    return (
        <footer className="mt-auto p-4">
            <p className="float-right"><Nav.Link href="https://reactjs.org/">Created using React.js</Nav.Link></p>
            <p className="float-left"><Nav.Link href="https://github.com/avilaJorge">By Jorge A Avila</Nav.Link></p>
        </footer>
    );
}

export default Footer;