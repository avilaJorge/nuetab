import React from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import firebase from "firebase";

import './signin.css';

import blogo from './bootstrap-solid.svg';
import rlogo from './logo192.png';


class SignIn extends React.Component{

    constructor(props) {
        super(props);
    }

    auth = () => {
        firebase.auth().getRedirectResult().then((result) => {
            let token = null;
            if (result.credential) {
                token = result.credential.accessToken;
            }
            let user = result.user;
        });
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithRedirect(provider);
    };

    render() {
        return (
            <>
                <div className="SignIn text-center">
                    <div className="form-signin">
                        <img className="mb-4" src={blogo} className="" alt="logo" width="72" height="72"/>
                        <img className="mb-4" src={rlogo} className="" alt="logo" width="72" height="72"/>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <Button variant="light" size="lg" className="button login-button" onClick={this.auth}>
                            <FontAwesomeIcon icon={faGoogle}/>
                        </Button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
                    </div>
                </div>
            </>
        );
    }
}

export default SignIn;
