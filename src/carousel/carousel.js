import React from 'react';
import './carousel.css';

import moment from 'moment';
import $ from "jquery";

function Carousel() {

    return (
        <div id="image-carousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#image-carousel" data-slide-to="0" className="active" />
                <li data-target="#image-carousel" data-slide-to="1" />
                <li data-target="#image-carousel" data-slide-to="2" />
                <li data-target="#image-carousel" data-slide-to="3" />
                <li data-target="#image-carousel" data-slide-to="4" />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/378271/pexels-photo-378271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/722687/blue-sea-blue-water-water-ocean-722687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#image-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#image-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
            <div className="main-text hidden-xs">
                <div className="col-md-12 text-center">
                    <div id="carousel-clock">
                        Hello, Jorge Avila.
                    </div>
                </div>
            </div>
        </div>
    );
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

export default Carousel;