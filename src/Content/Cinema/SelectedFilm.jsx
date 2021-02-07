import React from 'react';
import {DescriptionTrailer} from "./DescriptionTrailer";
import Media from 'react-media';

function SelectedFilm({siteMode, ...props}) {

    let filmImg = `Images/description/${props.film['link']}_D.jpg`;

    return (
        // <div className={`padding_15xs `}>
        //     <div className="col-lg-9 col-md-9 col-sm-9 margin-top-2">
                <div className="film_info">

                    <div className="filmFlex1 row-xs">
                        <div className="descImg">
                            <img src={filmImg} alt={props.film['title']}/>
                        </div>
                    </div>

                    <div className="filmFlex2">
                        <div className="description_h">
                            <h2>{props.film['title']}</h2>
                            <p>Смотрите {`${props.film['beginDate']} ${props.film['endDate']}`}</p>
                        </div>
                        <table className="description_table">
                            <tbody>
                            <tr>
                                <td>Жанр</td>
                                <td>{props.film['kind']}</td>
                            </tr>
                            <tr>
                                <td>Режиссер</td>
                                <td>{props.film['director']}</td>
                            </tr>
                            <tr>
                                <td>Продолжительность</td>
                                <td>{props.film['duration']}</td>
                            </tr>
                            <tr>
                                <td>Возраст</td>
                                <td>{props.film['age']}</td>
                            </tr>
                            <tr>
                                <td>В главных ролях</td>
                                <td>
                                    {props.film['actors']}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <br/>

                        <Media query="(min-width: 768px) and (min-height: 500px)">
                            <DescriptionTrailer description={props.film['description']}
                                                trailer_src={props.film['playerCode']}
                                                siteMode={siteMode}/>
                        </Media>


                    </div>
            {/*    </div>*/}
            {/*</div>*/}



            {/*<Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">*/}
            {/*    <DescriptionTrailer description={props.film['description']}*/}
            {/*                             trailer_src={props.film['playerCode']}/>*/}
            {/*</Media>*/}
        </div>
    );
}

export default SelectedFilm;