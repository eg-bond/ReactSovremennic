import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Button, Col, Modal, NavItem, Tab} from "react-bootstrap";
import SushiSwiper from "./SushiSwiper";

class ModalSushi extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="modal-container">
                <Button
                    id="seans_button_xs"
                    onClick={() => this.setState({ show: true })}
                    className='seans_button_xs'
                >
                    Меню
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Меню
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                            <NavItem eventKey="sushi" onClick={this.handleHide}>Суши</NavItem>
                            <NavItem eventKey="rolls" onClick={this.handleHide}>Роллы</NavItem>
                            <NavItem eventKey="black_rolls" onClick={this.handleHide}>Цветные/черные роллы</NavItem>
                            <NavItem eventKey="hot_rolls" onClick={this.handleHide}>Запеченые роллы</NavItem>
                            <NavItem eventKey="brand_rolls" onClick={this.handleHide}>Фирменные роллы</NavItem>
                            <NavItem eventKey="sets" onClick={this.handleHide}>Наборы, сашими</NavItem>
                            <NavItem eventKey="salads" onClick={this.handleHide}>Салаты</NavItem>
                            <NavItem eventKey="soups" onClick={this.handleHide}>Супы</NavItem>
                            <NavItem eventKey="hot_dishes" onClick={this.handleHide}>Горячие блюда</NavItem>
                            <NavItem eventKey="garnish" onClick={this.handleHide}>Гарниры</NavItem>
                            <NavItem eventKey="dessert" onClick={this.handleHide}>Десерты</NavItem>
                            <NavItem eventKey="gruzia" onClick={this.handleHide}>Грузинская кухня</NavItem>
                        </Nav>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

function Sushi() {
    return (
        <div>
            <div className="margin-top-2">
                <div className="sushi_page">
                    <Tab.Container defaultActiveKey="sushi">
                        <div>
                            <Col lg={3} md={3} sm={3}>
                                <Nav bsStyle="pills" className='hidden-xs' stacked>
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
                                <div className="info hidden-xs"><a href="http://www.region47.sbor.net/"><img
                                    src="images/region47.gif"></img></a>
                                </div>
                            </Col>

                            <div className="sushi_menu_xs visible-xs">
                                <ModalSushi />
                            </div>
                            <Col lg={9} md={9} sm={9} xs={12}>
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