import React from 'react';
import {Route} from "react-router-dom";
import SelectedFilm from "./SelectedFilm";

function Cinema(props) {
    return (
        <>
            {props.films.map(filmItem =>
                <Route key={filmItem.link} path={`/${filmItem.link}`}><SelectedFilm film={filmItem}/></Route>
            )}
        </>
    );
}

export default Cinema;