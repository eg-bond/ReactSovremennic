import React from "react";
import {NavLink} from "react-router-dom";

function IndexAdvXS() {
    return (
        <div className="container padding_15xs">
            <div className="row adv-xs">
                <div className="flexAdvXS">
                    <div className="sushiFlex"><NavLink to="/sushi"><img src="./Images/72.gif" alt=""/></NavLink></div>
                    <div className="infoFlex">
                        <div><a href="http://www.region47.sbor.net/"><img src="./Images/region47.gif" alt=""/></a></div>
                        <div><img src="./Images/jsb1.gif" alt=""/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexAdvXS;