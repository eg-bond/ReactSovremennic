import React from 'react';
import {Route} from "react-router-dom";
import SelectedFilm from "./SelectedFilm";
import Films from "../Films/Films";
import {DescriptionTrailer} from "./DescriptionTrailer";
import Media from "react-media";

function Cinema({siteMode, ...props}) {
    return (<>
            {props.films.map(filmItem =>
                <Route key={filmItem.link} path={`/${filmItem.link}`}>
                    <div className={`padding_15xs `}>
                        <div className="col-lg-9 col-md-9 col-sm-9 margin-top-2">
                            <SelectedFilm film={filmItem} siteMode={siteMode}/>
                            {siteMode === 'special' && <Films films={props.films} page={'cinema'}/>}
                        </div>
                    </div>
                    <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                        <DescriptionTrailer description={filmItem['description']}
                                            trailer_src={filmItem['playerCode']}
                                            siteMode={siteMode}/>
                    </Media>
                </Route>
            )}

        </>
    );
}

export default Cinema;