import React from 'react';
import {NavLink} from "react-router-dom";

function Films({films}) {
    return (
        <div>
            <h1>Фильмы</h1>
            <div className={"filmsSpecial"}>
                {
                    films.map(f =>
                            <div className="filmsSpecial__item" key={f.link}>
                                <div className="filmsSpecial__item__img">
                                    <NavLink to={f.link}>
                                        <img className="opacity"
                                             src={`./Images/top_menu/${f.link}.gif`} alt={f.title}/>
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