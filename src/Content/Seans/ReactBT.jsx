import React from 'react';
import {Col, NavItem, Row, Tab, Tabs} from "react-bootstrap";
import Nav from "react-bootstrap/lib/Nav";


function ReactBT() {
    return (
        <div>
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" className="hidden-xs seans-menu">
                <Tab className='seans-tabs' eventKey={1} title="Tab 1">
                    Tab 1 content
                </Tab>
                <Tab className='seans-tabs' eventKey={2} title="Tab 2">
                    Tab 2 content
                </Tab>
                <Tab className='seans-tabs' eventKey={3} title="Tab 3">
                    Tab 3 content
                </Tab>
            </Tabs>;
            <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                <Row className="clearfix">
                    <div className="hidden-xs seans-menu">
                        <Nav bsStyle="tabs" className='seans-tabs'>
                            <NavItem className="white" eventKey="first">Четверг</NavItem>
                            <NavItem className="white" eventKey="second">Пятница</NavItem>
                        </Nav>
                    </div>
                    <div>
                        <Tab.Content className="row xs350px" animation>
                            <Tab.Pane eventKey="first">
                                <table className="table_custom">
                                    <tbody>
                                    <tr className="table_head">
                                        <th>Сеанс</th>
                                        <th>Фильм</th>
                                        <th>Цена, руб</th>
                                    </tr>
                                    <tr className="table_gray">
                                        <td>10:00</td>
                                        <td>Дорогой папа 2D</td>
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
                            <Tab.Pane eventKey="second">
                                <table className="table_custom">
                                    <tbody>
                                    <tr className="table_head">
                                        <th>Сеанс</th>
                                        <th>Фильм</th>
                                        <th>Цена, руб</th>
                                    </tr>
                                    <tr className="table_gray">
                                        <td>10:00</td>
                                        <td>Дорогой папа 2D</td>
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
                </Row>
            </Tab.Container>;
        </div>
    );
}

export default ReactBT;