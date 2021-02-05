import React from "react";
import {NavLink} from "react-router-dom";

function Adv() {
    return (<div className="col-lg-3 col-md-3 col-sm-3">
            <div className="desktopAdv desktopAdv--1 focusImg"><a href="http://www.region47.sbor.net"><img src="./Images/region47.gif" alt="Регион47"/></a></div>
            <div className="desktopAdv desktopAdv--2"><img src="./Images/jsb1.gif" alt="Подарочный сертивикат"/></div>
            <div className="desktopAdv desktopAdv--3 focusImg"><NavLink to="sushi"><img src="./Images/72.gif" alt="Суши-бар"/></NavLink></div>
        </div>
    );
}

export default Adv;

