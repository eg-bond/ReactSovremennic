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
                    <Tab.Container defaultActiveKey="sushi">
                        <div>
                            <Col lg={3} md={3} sm={3}>
                                <Nav bsStyle="pills" stacked>
                                    <NavItem className='sushi-tab' eventKey="sushi">Суши</NavItem>
                                    <NavItem className='sushi-tab' eventKey="rolls">Роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="black_rolls">Цветные/черные роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="hot_rolls">Запеченые роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="brand_rolls">Фирменные роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="sets">Наборы, сашими</NavItem>
                                    <NavItem className='sushi-tab' eventKey="salads">Салаты</NavItem>
                                    <NavItem className='sushi-tab' eventKey="soups">Супы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="hot_dishes">Горячие блюда</NavItem>
                                    <NavItem className='sushi-tab' eventKey="garnish">Гарниры</NavItem>
                                    <NavItem className='sushi-tab' eventKey="dessert">Десерты</NavItem>
                                    <NavItem className='sushi-tab' eventKey="gruzia">Грузинская кухня</NavItem>
                                </Nav>
                                <div className="info"><a href="http://www.region47.sbor.net/"><img
                                    src="images/region47.gif"></img></a>
                                </div>
                            </Col>
                            <Col lg={9} md={9} sm={9}>
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