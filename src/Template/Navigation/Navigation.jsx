import React from 'react';
import s from './Navigation.module.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="space"></div>
                    <nav role="navigation" className={"navigation"+ ' ' + s.navbar_custom}>

                        <a href="index.html"><img src="./Images/logo.jpg"
                                                  className={"col-lg-2 col-md-2 col-sm-2 col-xs-3"+ ' ' + s.logo}></img></a>

                        <div id="navbarcollapse" className="navbar-collapse col-lg-10 col-md-10 col-sm-10 col-xs-9">
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