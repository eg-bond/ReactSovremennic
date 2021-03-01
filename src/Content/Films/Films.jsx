import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Films({ films }) {

    let [focusElem, switchFocusElem] = useState(' ')

    return (
        <div className='filmsSpecial'>
            <h1 className={"filmsSpecial__h1"}>Фильмы</h1>
            <div className={"filmsSpecial__flex"}>
                {
                    films.map(f =>
                        <div className="filmsSpecial__flex__item" key={f.link}>
                            <div className={`filmsSpecial__flex__item__img ${focusElem === f.link ? 'focusUp' : 'focusNone'}`}>
                                <NavLink tabIndex={-1} to={f.link}>
                                    <img src={`./Images/top_menu/${f.link}.gif`} alt={f.title} />
                                </NavLink>
                            </div>
                            <div className={"filmsSpecial__flex__title"}>
                                <NavLink onFocus={() => switchFocusElem(f.link)} to={f.link}>
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