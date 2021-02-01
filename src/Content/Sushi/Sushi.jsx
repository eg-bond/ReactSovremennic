import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Button, Col, Modal, NavItem, Tab} from "react-bootstrap";
import HotDishesSwiper from "./HotDishesSwiper";
import Media from 'react-media';
import BrandRollsSwiper from "./BrandRollsSwiper";
import ScrollToTop from "../../Template/ScrollToTop";

function SushiModal() {

    let [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="modal-container">
            <Button onClick={handleShow} className='seans_button_xs '>
                <span className="seans_button_xs__title">Меню</span> <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Меню</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                        <NavItem eventKey="sushi" onClick={handleClose}>Суши</NavItem>
                        <NavItem eventKey="rolls" onClick={handleClose}>Роллы</NavItem>
                        <NavItem eventKey="black_rolls" onClick={handleClose}>Цветные/черные роллы</NavItem>
                        <NavItem eventKey="hot_rolls" onClick={handleClose}>Запеченые роллы</NavItem>
                        <NavItem eventKey="brand_rolls" onClick={handleClose}>Фирменные роллы</NavItem>
                        <NavItem eventKey="mini_rolls" onClick={handleClose}>Мини-роллы</NavItem>
                        <NavItem eventKey="sets" onClick={handleClose}>Наборы, сашими</NavItem>
                        <NavItem eventKey="salads" onClick={handleClose}>Салаты</NavItem>
                        <NavItem eventKey="soups" onClick={handleClose}>Супы</NavItem>
                        <NavItem eventKey="hot_dishes" onClick={handleClose}>Горячие блюда</NavItem>
                        <NavItem eventKey="garnish" onClick={handleClose}>Гарниры</NavItem>
                        <NavItem eventKey="dessert" onClick={handleClose}>Десерты</NavItem>
                        <NavItem eventKey="gruzia" onClick={handleClose}>Грузинская кухня</NavItem>
                        <NavItem eventKey="pizza" onClick={handleClose}>Пицца</NavItem>
                    </Nav>
                </Modal.Body>
            </Modal>
        </div>
    );
}

function Sushi({themeCl}) {
    return (
        <div>
            <ScrollToTop/>
            <div className="sushi_page">
                <Tab.Container defaultActiveKey="sushi" id='sushiTab'>
                    <div>

                        <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                            <div className="sushi_menu_xs padding_15xs">
                                <SushiModal/>
                            </div>
                        </Media>

                        <Media query="(min-width: 768px) and (min-height: 500px)">
                            <Col lg={3} md={3} sm={3}>
                                <Nav className={themeCl.pills} bsStyle="pills" stacked>
                                    <NavItem className='sushi-tab' eventKey="sushi">Суши</NavItem>
                                    <NavItem className='sushi-tab' eventKey="rolls">Роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="black_rolls">Цветные/черные роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="hot_rolls">Запеченые роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="brand_rolls">Фирменные роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="mini_rolls">Мини-роллы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="sets">Наборы, сашими</NavItem>
                                    <NavItem className='sushi-tab' eventKey="salads">Салаты</NavItem>
                                    <NavItem className='sushi-tab' eventKey="soups">Супы</NavItem>
                                    <NavItem className='sushi-tab' eventKey="hot_dishes">Горячие блюда</NavItem>
                                    <NavItem className='sushi-tab' eventKey="garnish">Гарниры</NavItem>
                                    <NavItem className='sushi-tab' eventKey="dessert">Десерты</NavItem>
                                    <NavItem className='sushi-tab' eventKey="gruzia">Грузинская кухня</NavItem>
                                    <NavItem className='sushi-tab' eventKey="pizza">Пицца</NavItem>
                                </Nav>
                            </Col>
                        </Media>

                        <Col lg={9} md={9} sm={9}>

                            <Media query="(min-width: 768px) and (min-height: 500px)">
                                <div className="sushiAdv sushiAdv--1">
                                    <a href="http://www.region47.sbor.net/"><img src="./Images/region47_wide.gif" alt=""/></a>
                                </div>
                            </Media>

                            <Tab.Content animation>
                                <Tab.Pane eventKey="sushi">
                                    <div className="sushiEmptyImg">
                                        <img className="sushiFirstImg" src="./Images/sushi/sushi.gif" alt=""/>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="rolls"><img src="./Images/sushi/rolls.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="black_rolls"> <img src="./Images/sushi/black_rolls.gif"
                                                                       alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="hot_rolls"> <img src="./Images/sushi/hot_rolls.gif"
                                                                     alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="brand_rolls">
                                    <BrandRollsSwiper/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="mini_rolls"> <img src="./Images/sushi/mini_rolls.gif"
                                                                       alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="sets"> <img src="./Images/sushi/sets.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="salads"> <img src="./Images/sushi/salads.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="soups"> <img src="./Images/sushi/soups.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="hot_dishes">
                                    <HotDishesSwiper/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="garnish"> <img src="./Images/sushi/garnish.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="dessert"> <img src="./Images/sushi/dessert.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="gruzia"> <img src="./Images/sushi/gruzia.gif" alt=""/></Tab.Pane>
                                <Tab.Pane eventKey="pizza"> <img src="./Images/sushi/pizza.jpg" alt=""/></Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </div>
                </Tab.Container>;
            </div>
        </div>
    );
}

export default Sushi;