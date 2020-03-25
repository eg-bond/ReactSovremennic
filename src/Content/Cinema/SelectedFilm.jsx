import React from 'react';

function SelectedFilm(props) {

    let filmImg = `Images/description/${props.film['link']}_D.jpg`;

    return (
        <div className={`padding_15xs `}>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 margin-top-2">
                <div className="film_info">

                        <div className="filmFlex1 row-xs">
                            <div className="descImg">
                                <img src={filmImg} alt="cinemaImage"/>
                            </div>
                        </div>

                        <div className="filmFlex2">
                            <div className="description_h">
                                <h2 id="desc_title">{props.film['title']}</h2>
                                <p id="desc_date">Смотрите {`${props.film['beginDate']} ${props.film['endDate']}`}</p>
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

                            <hr className="hidden-xs"/>
                                <br/>
                                    <p id="normal_desc" className="lucida_font description hidden-xs">
                                        {props.film['description']}
                                    </p>

                                    <div className="embed-responsive embed-responsive-16by9 hidden-xs">
                                        <iframe id="desc_frame1" className="embed-responsive-item" frameBorder="0" src={"https://www.youtube.com/embed/" + props.film['playerCode']}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                                allowFullScreen title="film_trailer_desktop"/>
                                    </div>

                        </div>
                </div>
            </div>

            <div className="visible-xs">
                <p id="xs_desc" className="lucida_font description xs_desc">
                    {props.film['description']}
                </p>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="desc_frame1" className="embed-responsive-item" frameBorder="0" src={"https://www.youtube.com/embed/" + props.film['playerCode']}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope"
                            allowFullScreen title="film_trailer_mobile"/>
                </div>
            </div>

        </div>
    );
}

export default SelectedFilm;