import React, {useEffect, useState} from 'react';

import '../index.css';
import './home.css';
import ClockCarousel from '../carousel/clock-carousel';
import '../carousel/clock-carousel.css';
import NavBar from "../nav-bar/nav-bar";
import Calendar from "../calendar/my-calendar";
import Courses from "../courses/courses";
import Footer from "../footer/footer";
import CSE224 from "../cse224/CSE224";
import GetTimers from '../Timers/timers';
import {SuspenseWithPerf, useFirebaseApp} from "reactfire";

class Home extends React.Component {


    static pages = {
        home: 'home',
        carousel: 'carousel',
        cse224: 'cse224',
        cse202: 'cse202',
        cse291e: 'cse291e'
    };

    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);
        this.renderHome = this.renderHome.bind(this);

        this.state = {
            value: null,
            page: this.renderHome(),
            timerCollectionRef: props.timerRef
        };
        console.log(props.timerRef);
    }

    changePage = (page) => {
        switch (page) {
            case Home.pages.home:
                this.setState({page: this.renderHome()});
                break;
            case Home.pages.cse224:
                console.log(this.state.page);
                this.setState({page: <CSE224/>});
                break;
            default:
                this.state.page = this.renderHome();
        }
    };

    renderHome() {
        return (
            <div className="Home">
                <Courses/>
                <Calendar/>
            </div>
        );
    }

    render() {
        return (
            <div className="nutab">
                <main role="main">
                    <NavBar changePage={this.changePage} />
                    <ClockCarousel/>
                    <SuspenseWithPerf
                        fallback={'loading ...'}
                        traceId={'load-status'}
                    >
                        <GetTimers timersColRef={this.state.timerCollectionRef}/>
                    </SuspenseWithPerf>
                    {this.state.page}
                    <a href="https://www.npmjs.com/package/react-moment#quick-start">React-Moment</a>
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default Home;
