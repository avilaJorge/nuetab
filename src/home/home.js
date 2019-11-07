import React from 'react';

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
import Button from "react-bootstrap/Button";

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

        this.ref = React.createRef();
        this.changePage = this.changePage.bind(this);
        this.renderHome = this.renderHome.bind(this);

        this.state = {
            value: null,
            page: this.renderHome(),
            timerCollectionRef: props.timerRef
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        window.requestAnimationFrame(() => {
            if (this.ref.current) {
                this.ref.current.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
            }
        })
    }

    changePage = (page) => {
        switch (page) {
            case Home.pages.home:
                this.setState({page: this.renderHome()});
                break;
            case Home.pages.cse224:
                this.setState({page: <CSE224 ref={this.ref}/>});
                break;
            default:
                this.state.page = this.renderHome();
        }
    };

    renderHome() {
        return (
            <div ref={this.ref} className="Home">
                <Courses changePage={this.changePage}/>
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
                    <Footer/>
                </main>
            </div>
        );
    }
}

export default Home;
