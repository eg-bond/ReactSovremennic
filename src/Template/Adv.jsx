import React from "react";
import {NavLink} from "react-router-dom";
{/*<div className="col-lg-3 col-md-3 col-sm-3">*/}
// <div className="advGrid">
function Adv() {
    return (<div className="col-lg-3 col-md-3 col-sm-3">
            <div className="info info1"><a href="http://www.region47.sbor.net"><img src="./Images/region47.gif" alt=""/></a></div>
            <div className="info info2"><img src="./Images/jsb1.gif" alt=""/></div>
            <div className="info info3"><NavLink to="sushi"><img src="./Images/72.gif" alt=""/></NavLink></div>
        </div>
    );
}

export default Adv;

