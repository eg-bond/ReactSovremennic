import React from 'react';
import {NavLink} from "react-router-dom";
import SpecialSettings from "./SpecialSettings";
import {modifiedClass} from "../helpers";

function Navigation({siteMode, switchSiteMode, themeCl, fontSize}) {
    let modeToDispatch = siteMode === 'default' ? 'special' : 'default'
    const classHandler = (cl) => modifiedClass(cl, siteMode)
    let fsAdditionClass = fontSize === '150'
        ? 'navigation__menu__special__fsAdd-150'
        : fontSize === '200'
            ? 'navigation__menu__special__fsAdd-200' : ''

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

                    <nav role="navigation" className={`navbar navbar-inverse ${classHandler('navigation')} ${themeCl.back} ${themeCl.navs} ${themeCl.borders}`}>
                        {siteMode === "default" && <div className="navigation__logo">
                            <NavLink to="/"><img src="./Images/logo.gif" alt='logoImage'/></NavLink>
                        </div>}
                        <div className={`${classHandler('navigation__menu')} ${fsAdditionClass}`}>
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