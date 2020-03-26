import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="space"/>
                    <nav role="navigation" className="navbar navbar-inverse flexMenu">
                        <div className="logoElem">
                            <NavLink to="/"><img src="./Images/logo.gif" alt='logoImage'/></NavLink>
                        </div>
                        <div id="navbarcollapse" className="navbar-collapse menu">
                            <ul className="nav nav-pills">
                                <li><NavLink to="seans" activeClassName="active">Расписание</NavLink></li>
                                <li><NavLink to="about" activeClassName="active">О кинотеатре</NavLink></li>
                                <li><NavLink to="rules" activeClassName="active">Правила работы</NavLink></li>
                                <li><NavLink to="sushi" activeClassName="active">Суши-бар "КИН-НО"</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;