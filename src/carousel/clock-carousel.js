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
            format: "dddd, MMMM Do YYYY, h:mm:ss a",
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
            marginLeft: -(width / 2),
            marginTop: -(height / 2)
        }});
    }

    render () {

        const dateToFormat = new Date();
        return (
            <div className="carousel-container">
                <style>
                    #clock-container {

                    }
                </style>
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
                <h2 className="text-center p-4" id="clock-container" style={this.state.clockStyle}>
                    <Moment format={this.state.format}>{this.state.time}</Moment>
                </h2>
            </div>
        );
    }
}

// Performs better when kept in a separate function
$(function () {

    let mmt = () => {
        return '<h1 class="display-1"><strong>' +
            moment().format('MMMM Do YYYY') +
            '</strong></h1><h1 class="display-1"><strong>' +
            moment().format('h:mm:ss a') + '</strong></h1>';
    };

    $('#carousel-clock').html(mmt());
    window.setInterval(() => {
        $('#carousel-clock').html(mmt());
    }, 1000);
});

export default ClockCarousel;