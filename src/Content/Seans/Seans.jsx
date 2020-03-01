import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Modal, NavItem, Row, Tab} from "react-bootstrap";
import Nav from "react-bootstrap/lib/Nav";
import Adv from "../../Template/Adv";
import NavItems from "./NavItems";


function SeansModal(props) {

    const refArr = ["day0","day1", "day2", "day3", "day4", "day5", "day6"];

    let [show, setShow] = useState(false);
    let [buttonTitle, changButtonTitle] = useState(props.todayDate);

    useEffect(() => {
        changButtonTitle(props.todayDate);
    }, [props.todayDate]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selectModalItem = (e) => {
        changButtonTitle(e.target.text);
        setShow(false);
    };

    return (
        <div className="modal-container">
            <Button onClick={handleShow} className='seans_button_xs '>
                {buttonTitle}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Дата</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NavItems datesArr={props.datesArr} deviceType={"Mobile"} selectModalItem={selectModalItem}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}




const Seans = React.memo((props) => {

    console.log("render");

    // const datesArr = [
    //     ["day1", "Понедельник", "7 октября"],
    //     ["day2", "Вторник", "8 октября"],
    //     ["day3", "Среда", "9 октября"],
    //     ["day4", "Четверг", "10 октября"],
    //     ["day5", "Пятница", "11 октября"],
    //     ["day6", "Суббота", "12 октября"],
    //     ["day0", "Воскресенье", "6 октября"]
    // ]

    // let [todayDate, setTodayDate] = useState("Дата");
    // let [activeKey, setActiveKey] = useState(null);

    // const findActiveKey = () => {
    //     let date = new Date();
    //     let day = date.getDay();
    //     for (let i=0; i<=6; i++) {
    //         if (i == day) {
    //             setActiveKey(`day${i}`);
    //         }
    //     }
    // }

    // useEffect(() => {
    //     let todayItem = props.datesArr.find((item) => item[0] == props.activeKey);
    //     setTodayDate(todayItem[1] +" "+ todayItem[2]);
    // }, [props.activeKey]);

    return (
        <div>
            <div className="col-lg-9 col-md-9 col-sm-9">
                <Tab.Container defaultActiveKey={props.activeKey} id='table'>
                    <div>
                        <div className="hidden-xs seans-menu">
                            <NavItems datesArr={props.datesArr} deviceType={"notMobile"}/>
                        </div>

                        <div className="sushi_menu_xs visible-xs">
                            <SeansModal datesArr={props.datesArr} todayDate={props.todayDate} />
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