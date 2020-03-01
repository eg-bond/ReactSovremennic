import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab} from "react-bootstrap";
import Adv from "../../Template/Adv";
import NavItems from "./NavItems";
import SeansModal from "./SeansModal";


const Seans = React.memo((props) => {

    return (
        <div>
            <div className="col-lg-9 col-md-9 col-sm-9">
                <Tab.Container id='table' activeKey={props.activeKey} onSelect={k => props.changeActiveKey(k)}>
                    <div>
                        <div className="hidden-xs seans-menu">
                            <NavItems deviceType={"notMobile"} datesArr={props.datesArr} changeButtonTitle={props.changeButtonTitle}/>
                        </div>

                        <div className="sushi_menu_xs visible-xs">
                            <SeansModal datesArr={props.datesArr} buttonTitle={props.buttonTitle}
                                        changeButtonTitle={props.changeButtonTitle} initialButtonTitle={props.initialButtonTitle} />
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
                <div className="separator-special"></div>
            </div>

            <Adv />


        </div>
    );
});

export default Seans;