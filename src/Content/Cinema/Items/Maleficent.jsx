import React from 'react';

function Maleficent(props) {
    return (
        <div className='padding_15xs'>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 margin-top-2">
                <div className="film_info">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-3 row-xs">
                            <img id="desc_img" src={"./Images/description/"+props.films['bottomImgPath']}></img>
                        </div>

                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-9">
                            <div className="description_h">
                                <h2 id="desc_title">{props.films['title']}</h2>
                                <p id="desc_date">{`${props.films['beginDate']} ${props.films['endDate']}`}</p>
                            </div>
                            <table className="description_table">
                                <tbody>
                                <tr>
                                    <td>Жанр</td>
                                    <td>Фэнтези, приключения, семейный</td>
                                </tr>
                                <tr>
                                    <td>Режиссер</td>
                                    <td>Хоаким Роннинг</td>
                                </tr>
                                <tr>
                                    <td>Продолжительность</td>
                                    <td>118 мин.</td>
                                </tr>
                                <tr>
                                    <td>Возраст</td>
                                    <td>6+</td>
                                </tr>
                                <tr>
                                    <td>В главных ролях</td>
                                    <td>
                                        Дэвид Гяси,
                                        Анджелина Джоли,
                                        Эль Фаннинг,
                                        Харрис Дикинсон,
                                        Джуно Темпл,
                                        Мишель Пфайффер,
                                        Эд Скрейн,
                                        Чиветель Эджиофор,
                                        Имелда Стонтон,
                                        Каэ Александр.
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <hr className="hidden-xs"></hr>
                                <br></br>
                                    <p id="normal_desc" className="lucida_font description hidden-xs">
                                        Действие происходит через несколько лет после того, как Малефисента наложила злые чары на принцессу Аврору. Фильм рассказывает про сложную взаимосвязь между тёмной феей и будущей королевой, о новых союзниках и противниках в деле защиты волшебного леса и магических существах, которые в нем обитают.
                                    </p>

                                    <div className="embed-responsive embed-responsive-16by9 hidden-xs">
                                        <iframe id="desc_frame1" className="embed-responsive-item" frameBorder="0" src={"https://www.youtube.com/embed/" + props.films['playerCode']}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope"
                                                allowFullScreen></iframe>
                                    </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="visible-xs">

                <p id="xs_desc" className="lucida_font description xs_desc">
                    Действие происходит через несколько лет после того, как Малефисента наложила злые чары на принцессу Аврору. Фильм рассказывает про сложную взаимосвязь между тёмной феей и будущей королевой, о новых союзниках и противниках в деле защиты волшебного леса и магических существах, которые в нем обитают.
                </p>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="desc_frame1" className="embed-responsive-item" frameBorder="0" src={"https://www.youtube.com/embed/" + props.films['playerCode']}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope"
                            allowFullScreen></iframe>
                </div>
            </div>

        </div>
    );
}

export default Maleficent;