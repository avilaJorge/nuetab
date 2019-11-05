import React from 'react';

function Courses() {
    return (
        <div className="container marketing" id="courses">
            <div className="row">
                <div className="col-lg-4">
                    <a href="http://algorithms.eng.ucsd.edu/cse202"><img className="rounded-circle"
                                                                         src="img/Algorithms.svg" height="140px"
                                                                         width="140px" alt="text"/></a>
                    <h2><a href="http://algorithms.eng.ucsd.edu/cse202">CSE 202</a></h2>
                    <p>
                        Introduction to problems and algorithms<br/>
                        Mathematics for algorithm analysis<br/>
                        Divide and conquer<br/>
                        <small className="text-muted">
                            Sorting and order statistics<br/>
                            Fast Fourier transform<br/>
                            Closest pair
                        </small>
                        <br/>
                        Greedy method<br/>
                        Dynamic programming<br/>
                        Graph algorithms<br/>
                        Network Flow<br/>
                        Linear programming<br/>
                        NP-completeness<br/>
                        PSPACE-complete problems<br/>
                        Dealing with NP-hardness<br/>
                        <small className="text-muted">
                            Exploiting input structure<br/>
                            Approximation algorithms<br/>
                        </small>
                    </p>
                    <p><a className="btn btn-secondary" href="http://algorithms.eng.ucsd.edu/cse202/hours"
                          role="button">Important Dates &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <a href="http://cseweb.ucsd.edu/~gmporter/classNamees/fa19/cse224/"><img className="rounded-circle"
                                                                                             src="img/Network.svg"
                                                                                             height="140px"
                                                                                             width="140px"/></a>
                    <h2><a href="http://cseweb.ucsd.edu/~gmporter/classNamees/fa19/cse224/">CSE 224</a></h2>
                    <p>This course will provide a broad understanding of network design and implementation. Topics
                        include techniques for building distributed applications, sockets programming, Remote Procedure
                        Calls, scale-out distributed directories, distributed consensus and state management, fault
                        tolerance, networked storage, indirection, overlay networks, load balancing, and datacenter
                        design.</p>
                    <p><a className="btn btn-secondary" href="cse224/cse224-calendar.html" role="button">Course
                        Calendar &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" src="img/Entrepreneurship.svg" height="140px" width="140px"/>
                    <h2><a href="https://piazza.com/className/jyvubsvfidm4xz">CSE 291E</a></h2>
                    <p>Microelectronics and semiconductors provide a cornerstone $1.2 Trillion Electronics systems
                        industry. The functionality, performance, the ease of use and affordability are at all-time
                        highs. The industry has demonstrated a consistent capability to innovate solutions to meet
                        enormous technical and business challenges in both hardware and software aspects of systems
                        solutions. Innovations come from companies of all sizes. Innovators and entrepreneurs play a key
                        role and can have significant opportunities to bring new ideas to new products. Unfortunately
                        the success rate of new start-ups is anything but stellar.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
            </div>
        </div>
    );
}

export default Courses;
