import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Button, Col, Modal, NavItem, Tab} from "react-bootstrap";
import SushiSwiper from "./SushiSwiper";

function SushiModal() {

    let [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="modal-container">
            <Button onClick={handleShow} className='seans_button_xs '>
                Меню <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"/>
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
                        <NavItem eventKey="sets" onClick={handleClose}>Наборы, сашими</NavItem>
                        <NavItem eventKey="salads" onClick={handleClose}>Салаты</NavItem>
                        <NavItem eventKey="soups" onClick={handleClose}>Супы</NavItem>
                        <NavItem eventKey="hot_dishes" onClick={handleClose}>Горячие блюда</NavItem>
                        <NavItem eventKey="garnish" onClick={handleClose}>Гарниры</NavItem>
                        <NavItem eventKey="dessert" onClick={handleClose}>Десерты</NavItem>
                        <NavItem eventKey="gruzia" onClick={handleClose}>Грузинская кухня</NavItem>
                    </Nav>
                </Modal.Body>
            </Modal>
        </div>
    );
}

function Sushi() {
    return (
        <div>
            <div className="margin-top-2">
                <div className="sushi_page">
                    <Tab.Container defaultActiveKey="sushi" id='sushiTab'>
                        <div>
                            <div className="sushi_menu_xs visible-xs padding_15xs">
                                <SushiModal />
                            </div>

                            <Col lg={3} md={3} sm={3} className='hidden-xs'>
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
                            </Col>

                            <Col lg={9} md={9} sm={9}>
                                <Tab.Content animation>
                                    <Tab.Pane eventKey="sushi"><img src="./Images/sushi/sushi.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="rolls"> <img src="./Images/sushi/rolls.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="black_rolls"> <img src="./Images/sushi/black_rolls.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="hot_rolls"> <img src="./Images/sushi/hot_rolls.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="brand_rolls"> <img src="./Images/sushi/brand_rolls.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="sets"> <img src="./Images/sushi/sets.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="salads"> <img src="./Images/sushi/salads.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="soups"> <img src="./Images/sushi/soups.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="hot_dishes">
                                        <SushiSwiper />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="garnish"> <img src="./Images/sushi/garnish.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="dessert"> <img src="./Images/sushi/dessert.jpg"/></Tab.Pane>
                                    <Tab.Pane eventKey="gruzia"> <img src="./Images/sushi/gruzia.jpg"/></Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </div>
                    </Tab.Container>;
                </div>
            </div>
        </div>
    );
}

export default Sushi;