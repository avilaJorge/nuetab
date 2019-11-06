import React from 'react';

import useScript from "../custom-hooks/use-script";
import './CSE224.css';

function CSE224() {
    useScript("https://p.trellocdn.com/embed.min.js");

    return (
        <>
            <blockquote className="trello-card"><a href="https://trello.com/c/ov9vWvYh/201-project-2">Project 2</a>
            </blockquote>
            <div className="jumbotron bg-white" id="cse224-cal">
                <iframe id="cse224-cal" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGdRBOtf9x-RkvHstPdIcJpR3oKhWAQkk2pzsbSAEVDgFX78Vszy0Rk1D7dCuJDTleI8b1HdyH4m9I/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="1400"></iframe>
            </div>
        </>
    );
}
 export default CSE224;