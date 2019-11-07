import React from 'react';

import useScript from "../custom-hooks/use-script";
import './CSE224.css';

const CSE224 = React.forwardRef((props, ref) => {
    useScript("https://p.trellocdn.com/embed.min.js");
    return (
        <>
            <div id="cse224" ref={ref}>
                <div className="jumbotron bg-white" >
                    <div className="container card-container p-3">
                        <div className="row">
                            <div className="col-md-4">
                                <blockquote className="trello-card">
                                    <a href="https://trello.com/c/ykMBDKDe/169-course-site">Course Site</a>
                                </blockquote>
                            </div>
                            <div className="col-md-4">
                                <blockquote className="trello-card">
                                    <a href="https://trello.com/c/ov9vWvYh/201-project-2">Project 2</a>
                                </blockquote>
                            </div>
                            <div className="col-md-4">
                                <blockquote className="trello-card">
                                    <a href="https://trello.com/c/GpHsC27v/200-homework-3">Homework 3</a>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <iframe style={{marginTop: '2rem'}} id="cse224-cal" src="https://cseweb.ucsd.edu/~gmporter/classes/fa19/cse224/index.html" width="100%" height="1400" />
                    <iframe style={{marginTop: '2rem'}} src="https://docs.google.com/document/d/1CELsKIhKlVYclgcNwkU48hWyoqwLOONsrGQvfQHjahI/edit?fullscreen=true" width="100%" height="1400" />
                </div>
            </div>
        </>
    )
});

export default CSE224;