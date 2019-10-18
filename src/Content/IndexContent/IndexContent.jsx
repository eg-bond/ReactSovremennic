import React from 'react';
import Adv from "../../Template/Adv";
import SwiperXs from "../../Template/SwiperXs";

function IndexContent() {
    return (
        <div>
            <SwiperXs />
            <div className="separator"></div>

            <div className="trailers padding_15xs visible-xs">
                <h4>Трейлеры</h4>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item"
                            src="http://www.youtube.com/embed/PKSxTsuCQ4?autoplay=1&amp;iv_load_policy=3; &showinfo=0; &rel=0; loop=1&amp;&amp;autohide=1;listType=pla ype=playlist&list=PLfrc7TOjXulMiQWLR1Jr8ZiZ2b7hWqSZf"></iframe>
                </div>
            </div>

            <div className="container col-lg-9 col-md-9 col-sm-9 col-xs-12 padding_15xs">
                <div className="embed-responsive embed-responsive-16by9 hidden-xs">
                    <iframe className="embed-responsive-item"
                            src="http://www.youtube.com/embed/PKSxTsuCQ4?autoplay=1&amp;iv_load_policy=3; &showinfo=0; &rel=0; loop=1&amp;&amp;autohide=1;listType=pla ype=playlist&list=PLfrc7TOjXulMiQWLR1Jr8ZiZ2b7hWqSZf"></iframe>
                </div>

                <div className="separator-index"></div>

                <div className="news ">
                    <h2>Информация</h2>
                    <p>• Расписание сеансов можно узнать по телефону <b>2-12-32</b></p>
                    <p>• Отпразднуй день рождения в суши-баре <b>КИН-НО</b> со скидкой <b>10%</b> (скидка с карты
                        суммируeтся)</p>
                    <p>• В суши-баре <b>КИН-НО</b> с понедельника по среду с <b>12.00 - 18.00</b> часов, а в четверг и
                        пятницу с <b>12.00 - 16.00</b> часов действует скидка на все блюда <b>-30%</b></p>
                </div>

                <div className="separator-index"></div>
            </div>

            <Adv />
            <div className="container visible-xs col-xs-12 padding_15xs">
                <div className="row adv-xs">
                    <div className="sushi col-xs-5"><a href="sushi.html"><img src="images/72.gif"></img></a></div>
                    <div className="col-xs-7">
                        <div className="info"><a href="http://www.region47.sbor.net/"><img
                            src="images/region47.gif"></img></a></div>
                        <div className="info"><img src="images/jsb1.gif"></img></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexContent;