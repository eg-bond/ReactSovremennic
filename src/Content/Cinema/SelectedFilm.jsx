import React from 'react';

function SelectedFilm(props) {
    return (
        <div className='padding_15xs'>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 margin-top-2">
                <div className="film_info">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3 row-xs">
                            <img id="desc_img" src={"./Images/description/"+props.film['bottomImgPath']}></img>
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-9">
                            <div className="description_h">
                                <h2 id="desc_title">{props.film['title']}</h2>
                                <p id="desc_date">{`${props.film['beginDate']} ${props.film['endDate']}`}</p>
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

                            <hr className="hidden-xs"></hr>
                                <br></br>
                                    <p id="normal_desc" className="lucida_font description hidden-xs">
                                        {props.film['description']}
                                    </p>

                                    <div className="embed-responsive embed-responsive-16by9 hidden-xs">
                                        <iframe id="desc_frame1" className="embed-responsive-item" frameBorder="0" src={"https://www.youtube.com/embed/" + props.film['playerCode']}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                                allowFullScreen></iframe>
                                    </div>

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
                            allowFullScreen></iframe>
                </div>
            </div>

        </div>
    );
}

export default SelectedFilm;