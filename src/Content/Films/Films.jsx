import React from 'react';
import {NavLink} from "react-router-dom";

function Films({films, page}) {
    let mainClassname = page === 'index' ? 'filmsSpecial__indexPage' : 'filmsSpecial__cinemaPage'

    return (
        <div className={mainClassname}>
            <h1 className={"filmsSpecial__h1"}>Фильмы</h1>
            <div className={"filmsSpecial__flex"}>
                {
                    films.map(f =>
                        <div className="filmsSpecial__flex__item" key={f.link}>
                            <div className="filmsSpecial__flex__item__img">
                                <NavLink to={f.link}>
                                    <img src={`./Images/top_menu/${f.link}.gif`} alt={f.title}/>
                                </NavLink>
                            </div>
                            <div className={"filmsSpecial__flex__title"}>
                                <NavLink to={f.link}>
                                    <h2>{f.title}</h2>
                                    <p>{f.beginDate}</p>
                                </NavLink>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Films;