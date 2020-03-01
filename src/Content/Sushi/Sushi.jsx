import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Button, Col, Modal, NavItem, Tab} from "react-bootstrap";
import SushiSwiper from "./SushiSwiper";

function SushiModal() {

    let [show, setShow] = useState(false);
    let [buttonTitle, changButtonTitle] = useState("Меню");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selectModalItem = (e) => {
        changButtonTitle(e.target.text);
        setShow(false);
    };

    console.log(buttonTitle);

    return (
        <div className="modal-container">
            <Button onClick={handleShow} className='seans_button_xs '>
                {buttonTitle}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Меню</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                        <NavItem eventKey="sushi" onClick={selectModalItem}>Суши</NavItem>
                        <NavItem eventKey="rolls" onClick={selectModalItem}>Роллы</NavItem>
                        <NavItem eventKey="black_rolls" onClick={selectModalItem}>Цветные/черные роллы</NavItem>
                        <NavItem eventKey="hot_rolls" onClick={selectModalItem}>Запеченые роллы</NavItem>
                        <NavItem eventKey="brand_rolls" onClick={selectModalItem}>Фирменные роллы</NavItem>
                        <NavItem eventKey="sets" onClick={selectModalItem}>Наборы, сашими</NavItem>
                        <NavItem eventKey="salads" onClick={selectModalItem}>Салаты</NavItem>
                        <NavItem eventKey="soups" onClick={selectModalItem}>Супы</NavItem>
                        <NavItem eventKey="hot_dishes" onClick={selectModalItem}>Горячие блюда</NavItem>
                        <NavItem eventKey="garnish" onClick={selectModalItem}>Гарниры</NavItem>
                        <NavItem eventKey="dessert" onClick={selectModalItem}>Десерты</NavItem>
                        <NavItem eventKey="gruzia" onClick={selectModalItem}>Грузинская кухня</NavItem>
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
                </div>
            </div>
        </div>
    );
}

export default Sushi;