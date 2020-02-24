import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="space"></div>
                    <nav role="navigation" className="navbar navbar-inverse flexMenu">
                        <div className="logoElem">
                            <NavLink to="/"><img src="images/logo.jpg"/></NavLink>
                        </div>
                        <div id="navbarcollapse" className="navbar-collapse menu">
                            <ul className="nav nav-pills">
                                <li><NavLink to="seans">Расписание</NavLink></li>
                                <li><NavLink to="about">О кинотеатре</NavLink></li>
                                <li><NavLink to="rules">Правила работы</NavLink></li>
                                <li><NavLink to="sushi">Суши-бар "КИН-НО"</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}


export default Navigation;