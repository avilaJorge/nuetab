import React from 'react';

import useScript from "../custom-hooks/use-script";
import './CSE224.css';

const CSE224 = React.forwardRef((props, ref) => {
    useScript("https://p.trellocdn.com/embed.min.js");
    return (
        <>
            <div ref={ref}>
                <blockquote className="trello-card">
                    <a href="https://trello.com/c/ov9vWvYh/201-project-2">Project 2</a>
                </blockquote>
                <div className="jumbotron bg-white" >
                    <iframe id="cse224-cal" src="https://cseweb.ucsd.edu/~gmporter/classes/fa19/cse224/index.html" width="100%" height="1400" />
                </div>
            </div>
        </>
    )
});

export default CSE224;