import React from 'react';

function Joker(props) {
    return (
        <div>
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
                                    <td>Триллер, драма, криминал</td>
                                </tr>
                                <tr>
                                    <td>Режиссер</td>
                                    <td>Тодд Филлипс</td>
                                </tr>
                                <tr>
                                    <td>Продолжительность</td>
                                    <td>122 мин.</td>
                                </tr>
                                <tr>
                                    <td>Возраст</td>
                                    <td>18+</td>
                                </tr>
                                <tr>
                                    <td>В главных ролях</td>
                                    <td>
                                        Хоакин Феникс,
                                        Зази Битц,
                                        Роберт Де Ниро,
                                        Джоли Чань,
                                        Марк Мэрон,
                                        Фрэнсис Конрой,
                                        Бретт Каллен,
                                        Дуглас Ходж,
                                        Мэри Кейт Малат,
                                        Шей Уигэм.
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <hr className="hidden-xs"></hr>
                                <br></br>
                                    <p id="normal_desc" className="lucida_font description hidden-xs">
                                        Готэм, начало 1980-х годов. Комик Артур Флек живет с больной матерью, которая с
                                        детства учит его «ходить с улыбкой». Пытаясь нести в мир хорошее и дарить людям
                                        радость, Артур сталкивается с человеческой жестокостью и постепенно приходит к
                                        выводу, что этот мир получит от него не добрую улыбку, а ухмылку злодея Джокера.
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

                </p>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe id="desc_frame2" className="embed-responsive-item"
                            src="https://www.youtube.com/embed/e1cnRzbPu4I" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
                </div>
            </div>

            <div className="container col-lg-3 col-md-3 col-sm-3 hidden-xs">
                <div className="info"><a href="http://www.region47.sbor.net"><img src="images/region47.gif"></img></a></div>
                <div className="info hidden-xs"><img src="images/jsb1.gif"></img></div>
                <div className="sushi hidden-xs"><a href="sushi.html"><img src="images/72.gif"></img></a></div>
                <div className="sushi visible-xs"><a href="sushi.html"><img src="images/561.gif"></img></a></div>
            </div>
        </div>
    );
}

export default Joker;