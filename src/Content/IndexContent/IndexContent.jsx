import React from 'react';
import IndexAdvXS from "../../Template/IndexAdvXS";
import Media from 'react-media';

function IndexContent() {
    return (
        <div>
            <div className="separator"/>

            <div className="trailers container col-lg-9 col-md-9 col-sm-9 col-xs-12 padding_15xs">

                <h4 className={"visible-xs"}>Трейлеры</h4>
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
            </div>

            <Media query="(max-width: 768px)">
                <IndexAdvXS />
            </Media>

        </div>
    );
}

export default IndexContent;