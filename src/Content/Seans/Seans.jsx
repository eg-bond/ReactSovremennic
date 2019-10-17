import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavItem, Row, Tab} from "react-bootstrap";
import Nav from "react-bootstrap/lib/Nav";
import Adv from "../../Template/Adv";


function Seans() {
    return (
        <div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12 padding_0xs">
                <Tab.Container defaultActiveKey="day4">
                    <div>
                        <div className="hidden-xs seans-menu">
                            <Nav bsStyle="tabs" className='seans-tabs'>
                                <NavItem eventKey="day3">Среда<br></br>16 октября</NavItem>
                                <NavItem eventKey="day4">Четверг<br></br>17 октября</NavItem>
                                <NavItem eventKey="day5">Пятница<br></br>18 октября</NavItem>
                                <NavItem eventKey="day6">Суббота<br></br>19 октября</NavItem>
                                <NavItem eventKey="day0">Воскресенье<br></br>20 октября</NavItem>
                                <NavItem eventKey="day1">Понедельник<br></br>21 октября</NavItem>
                                <NavItem eventKey="day2">Вторник<br></br>22 октября</NavItem>
                            </Nav>
                        </div>
                        <div>
                            <Tab.Content className="xs350px" animation>
                                <Tab.Pane eventKey="day3">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Среда</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day4">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Четверг 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day5">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Friday 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day6">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Sabato 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day0">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Sunday 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day1">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>Monday 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                                <Tab.Pane eventKey="day2">
                                    <table className="table_custom">
                                        <tbody>
                                        <tr className="table_head">
                                            <th>Сеанс</th>
                                            <th>Фильм</th>
                                            <th>Цена, руб</th>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>10:00</td>
                                            <td>sreda 2D</td>
                                            <td>150</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>11:45</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>180</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>13:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>230</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>16:40</td>
                                            <td>Птичий дозор 2D</td>
                                            <td>260</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>18:30</td>
                                            <td>Оно 2 2D</td>
                                            <td>300</td>
                                        </tr>
                                        <tr className="table_white">
                                            <td>21:45</td>
                                            <td>Дорогой папа 2D</td>
                                            <td>200</td>
                                        </tr>
                                        <tr className="table_gray">
                                            <td>23:35</td>
                                            <td>Оно 2 2D</td>
                                            <td>270</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>;

            </div>

            <div className="visible-xs">
                <div className="row">
                    <ul className="dropdown-menu-xs float-left">
                        <div className="separator"></div>
                        <h4>Фильмы</h4>
                        <div className="swiper-container film-swiper-xs">
                            <div className="swiper-wrapper" id="mobileSwiper">

                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            <Adv />

            <div className="separator-xs margin-top-1"></div>

            <div className="container visible-xs info_wide padding_0xs">
                <a href="http://www.region47.sbor.net/"><img src="images/region47_wide.gif"></img></a>
            </div>
        </div>
    );
}

export default Seans;