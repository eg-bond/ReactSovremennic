import React from 'react';
import SpecialSettings from "../../Template/SpecialSettings";

function About({siteMode}) {

    return (
        <div>
            <div className="col-lg-9 col-md-9 col-sm-9 padding_15xs">
                <div className="rules white">
                    <h3>О кинотеатре «Современник»</h3>
                    <p> Кинотеатр «Современник» обрёл свою вторую жизнь в 2005 году и стал одним из
                        излюбленных мест проведения досуга жителей города. Только здесь вы сможете посмотреть
                        любимые фильмы на большом экране в кинозале, оснащенном по последнему слову техники , что
                        позволит вам в полной мере насладиться качеством фильма и игрой любимых актеров.</p>
                    <p> В кинотеатре установлены игровые автоматы – аэрохоккей, виртуальные авто и
                        мото гонки, другие электронные игры.</p>
                    <p> Кинотеатр проводит сеансы семейного просмотра, ночные сеансы. Узнать
                        раписание кинотеатра можно на нашем сайте или по телефону 2-12-32, по этому телефону можно
                        забронировать билеты, как частному лицу, так и организациям для массового просмотра
                        фильма.</p>
                    <p> Большой кинозал, рассчитанный на 398 мест, оборудован удобными креслами фирмы
                        EUROSEATING серии Montreal с держателями напитков и воздушной кукурузы, удобными для любого
                        роста. Количество рядов 16, последний ряд оснащён креслами с убирающимися
                        подлокотниками.</p>
                    <p> Кинозал оснащен огромным звукопроводящим экраном с повышенным коэффициентом
                        отражения, выполненный по новейшей технологии и не препятствующий распространению звука.</p>
                </div>

                <div className="aboutImages">
                    <div className="aboutImages__image">
                        <img src="./Images/about1.gif" alt="фото кинотеатра 1"/>
                    </div>
                    <div className="aboutImages__image hidden-xs">
                        <img src="./Images/about2.gif" alt="фото кинотеатра 2"/>
                    </div>
                    <div className="aboutImages__image">
                        <img src="./Images/about3.gif" alt="фото кинотеатра 3"/>
                    </div>
                    <div className="aboutImages__image hidden-xs">
                        <img src="./Images/about4.gif" alt="фото кинотеатра 4"/>
                    </div>
                </div>

                <div className="rules white">
                    <p>Адрес: г. Сосновый Бор, ул. Комсомольская д.1 </p>

                    {
                        siteMode === "default" &&
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab3cf16ca0bc3eed0838b34be9c0607866b4c270427026b7fe0dd14ef4096116b&amp;source=constructor"
                                width="769" height="491" frameBorder="0" title="yandex_map"/>
                        </div>
                    }

                </div>
            </div>
        </div>

    );
}

export default About;