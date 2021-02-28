import React from 'react';
import { DescriptionTrailer } from "./DescriptionTrailer";
import Media from 'react-media';
import ScrollToTop from "../../Template/ScrollToTop";

function SelectedFilm({ siteMode, themeCl, ...props }) {

    let filmImg = `Images/description/${props.film['link']}_D.jpg`;

    if (props.fontSize === '200') {
        return (
            <div>       
                {siteMode === 'special' && <ScrollToTop/>}
                <div className="film_info">

                    <div className="filmFlex2">
                        <div className={`description_h_200`}>
                            <h2 className={siteMode === 'special' ? themeCl.elems : ''}>{props.film['title']}</h2>
                            <p className={siteMode === 'special' ? themeCl.elems : ''}>Смотрите {`${props.film['beginDate']} ${props.film['endDate']}`}</p>
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
                    </div>

                </div>
            </div>

        )
    } else {
        return (
            <div className="film_info">
                {siteMode === 'special' && <ScrollToTop/>}
                <div className="filmFlex1 row-xs">
                    <div className="descImg">
                        <img src={filmImg} alt={props.film['title']} />
                    </div>
                </div>

                <div className="filmFlex2">
                    <div className={`description_h`}>
                        <h2 className={siteMode === 'special' ? themeCl.elems : ''}>{props.film['title']}</h2>
                        <p className={siteMode === 'special' ? themeCl.elems : ''}>Смотрите {`${props.film['beginDate']} ${props.film['endDate']}`}</p>
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

                    <br />

                    <Media query="(min-width: 768px) and (min-height: 500px)">
                        <DescriptionTrailer description={props.film['description']}
                            trailer_src={props.film['playerCode']}
                            siteMode={siteMode} />
                    </Media>

                </div>

            </div>

        );
    }

}

export default SelectedFilm;