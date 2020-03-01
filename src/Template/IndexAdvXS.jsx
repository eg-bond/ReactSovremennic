import React from "react";
import {NavLink} from "react-router-dom";

function IndexAdvXS() {
    return (
        <div className="container visible-xs col-xs-12 padding_15xs">
            <div className="row adv-xs">
                <div className="flexAdvXS">
                    <div className="sushiFlex"><a href="sushi.html"><img src="images/72.gif"/></a></div>
                    <div className="infoFlex">
                        <div><a href="http://www.region47.sbor.net/"><img src="images/region47.gif"/></a></div>
                        <div><img src="images/jsb1.gif"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexAdvXS;