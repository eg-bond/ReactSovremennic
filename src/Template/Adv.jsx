import React from "react";
import {NavLink} from "react-router-dom";

function Adv() {
    return (<div className="col-lg-3 col-md-3 col-sm-3">
            <div className="info info1"><a href="http://www.region47.sbor.net"><img src="./Images/region47.gif" alt="reg47_img"/></a></div>
            <div className="info info2"><img src="./Images/jsb1.gif" alt="gift_img"/></div>
            <div className="info info3"><NavLink to="sushi"><img src="./Images/72.gif" alt="sushi_img"/></NavLink></div>
        </div>
    );
}

export default Adv;

