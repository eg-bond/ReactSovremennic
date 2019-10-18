import React from "react";
import {NavLink} from "react-router-dom";

function Adv() {
    return (
        <div className="container col-lg-3 col-md-3 col-sm-3 hidden-xs">
            <div className="info"><a href="http://www.region47.sbor.net"><img src="./images/region47.gif"></img></a>
            </div>
            <div className="info"><img src="images/jsb1.gif"></img></div>
            <div className="sushi"><NavLink to="sushi"><img src="./images/72.gif"></img></NavLink></div>
        </div>
    );
}

export default Adv;

