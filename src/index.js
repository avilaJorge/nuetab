import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'react-bootstrap/Spinner';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
    FirebaseAppProvider,
    AuthCheck,
    SuspenseWithPerf, useFirebaseApp
} from 'reactfire';
import 'firebase/performance';

import './index.css';
import Home from './home/home';
import SignIn from './sign-in/sign-in';

const firebaseConfig = {
    apiKey: "AIzaSyASE_m6wDIaaXit-Wh-jWXOobBjBgEjEsg",
    authDomain: "nutab-jorge.firebaseapp.com",
    databaseURL: "https://nutab-jorge.firebaseio.com",
    projectId: "nutab-jorge",
    storageBucket: "nutab-jorge.appspot.com",
    messagingSenderId: "723291823243",
    appId: "1:723291823243:web:b55fcac31bf162b75ec88e",
    measurementId: "G-BXB4HB9692"
};

const timerCollectionName = 'countdown-timers';

function UseCallFirebase(props) {

    console.log("UseCallFirebase called!");

    const firebaseApp = useFirebaseApp();
    const ref = firebaseApp.firestore().collection(timerCollectionName).orderBy("time");

    return (
        <Home timerRef={ref}/>
    );
}

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
        <SuspenseWithPerf traceId={'load-login-status'} fallback={
            <>
                <div className="Login">
                    <Spinner animation="grow" role="status" className="login-spinner"/>
                </div>
            </>

        }>
            <AuthCheck fallback={<SignIn/>}>
                <UseCallFirebase/>
            </AuthCheck>
        </SuspenseWithPerf>
    </FirebaseAppProvider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
