import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Col, NavItem, Tab} from "react-bootstrap";
import SushiSwiper from "./SushiSwiper";


function Sushi() {
    return (
        <div>
            <div className="margin-top-2">
                <div className="sushi_page">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="sushi">
                        <div>
                            <Col lg={3}>
                                <Nav bsStyle="pills" stacked>
                                    <NavItem eventKey="sushi">Суши</NavItem>
                                    <NavItem eventKey="rolls">Роллы</NavItem>
                                    <NavItem eventKey="black_rolls">Цветные/черные роллы</NavItem>
                                    <NavItem eventKey="hot_rolls">Запеченые роллы</NavItem>
                                    <NavItem eventKey="brand_rolls">Фирменные роллы</NavItem>
                                    <NavItem eventKey="sets">Наборы, сашими</NavItem>
                                    <NavItem eventKey="salads">Салаты</NavItem>
                                    <NavItem eventKey="soups">Супы</NavItem>
                                    <NavItem eventKey="hot_dishes">Горячие блюда</NavItem>
                                    <NavItem eventKey="garnish">Гарниры</NavItem>
                                    <NavItem eventKey="dessert">Десерты</NavItem>
                                    <NavItem eventKey="gruzia">Грузинская кухня</NavItem>
                                </Nav>
                                <div className="info"><a href="http://www.region47.sbor.net/"><img
                                    src="images/region47.gif"></img></a>
                                </div>
                            </Col>
                            <Col lg={9}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="sushi"><img src="./Images/sushi/sushi.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="rolls"> <img src="./Images/sushi/rolls.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="black_rolls"> <img src="./Images/sushi/black_rolls.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="hot_rolls"> <img src="./Images/sushi/hot_rolls.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="brand_rolls"> <img src="./Images/sushi/brand_rolls.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="sets"> <img src="./Images/sushi/sets.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="salads"> <img src="./Images/sushi/salads.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="soups"> <img src="./Images/sushi/soups.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="hot_dishes">
                                        <SushiSwiper />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="garnish"> <img src="./Images/sushi/garnish.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="dessert"> <img src="./Images/sushi/dessert.jpg"></img></Tab.Pane>
                                    <Tab.Pane eventKey="gruzia"> <img src="./Images/sushi/gruzia.jpg"></img></Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </div>
                    </Tab.Container>;


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

                    <div className="separator-xs margin-top-1"></div>

                    <div className="container visible-xs info_wide padding_0xs">
                        <a href="http://www.region47.sbor.net/"><img src="images/region47_wide.gif"></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sushi;