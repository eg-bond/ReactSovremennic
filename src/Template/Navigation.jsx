import React from 'react';
import {NavLink} from "react-router-dom";
import SpecialSettings from "./SpecialSettings";
import {modifiedClass} from "../helpers";
import Media from "react-media";

function Navigation({siteMode, switchSiteMode}) {
    let modeToDispatch = siteMode === 'default' ? 'special' : 'default'
    const classHandler = (cl) => modifiedClass(cl, siteMode)

    return (
        <div>
            <div className="container">
                <div className="row">
                    {siteMode === "special" && <SpecialSettings/>}

                    <div className={siteMode === "default" && "space"}>
                        {siteMode === "special" && <div className="navigation__logo">
                                <NavLink to="/"><img src="./Images/logo.gif" alt='logoImage'/></NavLink>
                            </div>
                            }
                            <button onClick={() => switchSiteMode(modeToDispatch)}>
                                {siteMode === "default" ? "Версия для слабовидящих" : "Обычная версия сайта"}
                            </button>}
                    </div>

                    <nav role="navigation" className={`navbar navbar-inverse ${classHandler('navigation')}`}>
                        {siteMode === "default" && <div className="navigation__logo">
                            <NavLink to="/"><img src="./Images/logo.gif" alt='logoImage'/></NavLink>
                        </div>}
                        <div className="navigation__menu">
                            <ul>
                                <li><NavLink to="seans" activeClassName="active">Расписание</NavLink></li>
                                {siteMode === "special" && <li><NavLink to="films" activeClassName="active">Фильмы</NavLink></li>}
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