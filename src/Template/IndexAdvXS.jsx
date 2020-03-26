import React from "react";
import {NavLink} from "react-router-dom";

function IndexAdvXS() {
    return (
        <div className="container col-xs-12 padding_15xs">
            <div className="row adv-xs">
                <div className="flexAdvXS">
                    <div className="sushiFlex"><NavLink to="/sushi"><img src="./Images/72.gif" alt="sushi_img"/></NavLink></div>
                    <div className="infoFlex">
                        <div><a href="http://www.region47.sbor.net/"><img src="./Images/region47.gif" alt="reg47_img"/></a></div>
                        <div><img src="./Images/jsb1.gif" alt="gift_img"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexAdvXS;