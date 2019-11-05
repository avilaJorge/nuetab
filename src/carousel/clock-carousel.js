import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Moment from 'react-moment';

import moment from 'moment';
import $ from "jquery";

import './clock-carousel.css';

class ClockCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.targetRef = React.createRef();
        this.state = {
            time: new Date(),
            dateFormat: "dddd, MMMM Do YYYY",
            timeFormat: "h:mm:ss a",
            clockStyle: null
        };

        setInterval(() => {
            this.setState({time: new Date()});
        }, 1000);
    }

    componentDidMount() {
        const ref = document.getElementById('clock-container');
        const height = ref.clientHeight;
        const width = ref.clientWidth;
        this.setState({clockStyle: {
            marginLeft: -(width / 2.0),
            marginTop: -(height / 2.0)
        }});
    }

    render () {

        const dateToFormat = new Date();
        return (
            <div className="carousel-container">
                <Carousel ref={this.carouselRef}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/378271/pexels-photo-378271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div id="clock-container" className="text-center p-0" style={this.state.clockStyle}>
                    <h1 className="font-weight-bolder text-white text-center p-4">
                        <Moment format={this.state.dateFormat}>{this.state.time}</Moment><br/>
                        <Moment format={this.state.timeFormat}>{this.state.time}</Moment>
                    </h1>
                </div>
            </div>
        );
    }
}

export default ClockCarousel;