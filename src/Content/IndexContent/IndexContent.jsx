import React from 'react';
import IndexAdvXS from "../../Template/IndexAdvXS";
import Media from 'react-media';
import ModalImage from "react-modal-image";

function IndexContent() {
    return (
        <div>
            <div className="separator"/>

            <div className="trailers container col-lg-9 col-md-9 col-sm-9 col-xs-12 padding_15xs">

                <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                    <h4>Трейлеры</h4>
                </Media>

                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" title="trailers_desktop"
                            src="http://www.youtube.com/embed/PKSxTsuCQ4? ype=playlist&list=PLfrc7TOjXulMiQWLR1Jr8ZiZ2b7hWqSZf"/>
                </div>

                <div className="separator-xs"/>

                <div className="news">
                    <h2>Информация</h2>
                    <p>• Расписание сеансов можно узнать по телефону <b>2-12-32</b></p>
                    <p>• Отпразднуй день рождения в суши-баре <b>КИН-НО</b> со скидкой <b>10%</b> (скидка с карты
                        суммируeтся)</p>
                    <p>• В суши-баре <b>КИН-НО</b> с понедельника по среду с <b>12.00 - 18.00</b> часов, а в четверг и
                        пятницу с <b>12.00 - 16.00</b> часов действует скидка на все блюда <b>-20%</b></p>
                </div>

                <div className="separator-xs"/>

                <div className="news">
                    <h2>Новинки в баре</h2>
                    <div className="barNewImages">
                        <div className="barNewImage">
                            <p className="barNewImage__p">Начос "Торнадо"</p>
                            <div className={"barNewImage__container"}>
                                <ModalImage hideDownload={true} hideZoom={true} className={"barNewImage__img"}
                                            small={"./Images/tornado.gif"} large={"./Images/tornadoFS.jpg"} alt=""/>
                            </div>
                        </div>
                        <div className="barNewImage">
                            <p>Поп-корн Карамель</p>
                            <div className={"barNewImage__container"}>
                                <ModalImage hideDownload={true} hideZoom={true} className={"barNewImage__img"}
                                            small={"./Images/caramel.gif"} large={"./Images/caramelFS.jpg"} alt=""/>
                            </div>
                        </div>
                        <div className="barNewImage">
                            <p>Игрушки "Тролли"</p>
                            <div className={"barNewImage__container"}>
                                <ModalImage hideDownload={true} hideZoom={true} className={"barNewImage__img"}
                                         small={"./Images/trolls.gif"} large={"./Images/trollsFS.jpg"} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="separator-xs"/>

            </div>

            <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                <IndexAdvXS />
            </Media>

        </div>
    );
}

export default IndexContent;