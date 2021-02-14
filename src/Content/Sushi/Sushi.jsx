import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/lib/Nav";
import {Button, Col, Modal, NavItem} from "react-bootstrap";
import HotDishesSwiper from "./HotDishesSwiper";
import Media from 'react-media';
import BrandRollsSwiper from "./BrandRollsSwiper";

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

const Sushi = ({themeCl, siteMode}) => {

    let [key, setKey] = useState('sushi');
    let [activeKey, setActiveKey] = useState('sushi');
    let [focusReg, switchFocusReg] = useState('focusNone')

    let swiperArr = ['brand_rolls', 'hot_dishes']
    let defaultSushiArr = [
        ['sushi', 'Суши'],
        ['rolls', 'Роллы'],
        ['black_rolls', 'Цветные/черные роллы'],
        ['hot_rolls', 'Запеченые роллы'],
        ['brand_rolls', 'Фирменные роллы'],
        ['mini_rolls', 'Мини-роллы'],
        ['sets', 'Наборы'],
        ['salads', 'Салаты'],
        ['soups', 'Супы'],
        ['hot_dishes', 'Горячие блюда'],
        ['garnish', 'Гарниры'],
        ['dessert', 'Десерты'],
        ['gruzia', 'Грузинская кухня'],
        ['pizza', 'Пицца']
    ]
    let specialSushiArr = [
        ['sushi', 'Суши'],
        ['rolls', 'Роллы'],
        ['black_rolls', 'Цветные/черные роллы'],
        ['hot_rolls', 'Запеченые роллы'],
        ['brand_rolls1', 'Фирменные роллы 1'],
        ['brand_rolls2', 'Фирменные роллы 2'],
        ['brand_rolls3', 'Фирменные роллы 3'],
        ['mini_rolls', 'Мини-роллы'],
        ['sets', 'Наборы'],
        ['salads', 'Салаты'],
        ['soups', 'Супы'],
        ['hot_dishes1', 'Горячие блюда 1'],
        ['hot_dishes2', 'Горячие блюда 2'],
        ['hot_dishes3', 'Горячие блюда 3'],
        ['hot_dishes4', 'Горячие блюда 4'],
        ['garnish', 'Гарниры'],
        ['dessert', 'Десерты'],
        ['gruzia', 'Грузинская кухня'],
        ['pizza', 'Пицца']
    ]

    const desktopMenuItem = (key, title) =>
        <button key={key} className={activeKey === key && 'active'}
                onClick={(e) => sushiImageChange(e, key)}>{title}</button>

    const SushiContentWrapper = (props) =>
        <div className='sushi_page__content' style={{paddingBottom: "30px"}}>{props.children}</div>

    const firstSushiImage = (key) =>
        <SushiContentWrapper>
            <div className="sushiEmptyImg">
                <img className="sushiFirstImg" src={`./Images/sushi/${key}.gif`} alt="sushi"/>
            </div>
        </SushiContentWrapper>

    const swiperSushiElem = (key) =>
        <SushiContentWrapper>
            {key === 'brand_rolls' ? <BrandRollsSwiper/> : <HotDishesSwiper/>}
        </SushiContentWrapper>

    const sushiImageChange = (e, key) => {
        setKey(key)
        setActiveKey(key)
        e.target.className = 'active'
    }

    return (
        <div>
            {/*<ScrollToTop/>*/}
            <div className="sushi_page">
                    <div>
                        <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
                            <div className="sushi_menu_xs padding_15xs">
                                <SushiModal/>
                            </div>
                        </Media>

                        <Media query="(min-width: 768px) and (min-height: 500px)">
                            <Col lg={3} md={3} sm={3}>
                                <div className={`sushi_page__menuButtons ${themeCl.navs}`}>
                                    {siteMode === 'default'
                                        ? defaultSushiArr.map(item => desktopMenuItem(item[0], item[1]))
                                        : specialSushiArr.map(item => desktopMenuItem(item[0], item[1]))}
                                </div>
                            </Col>
                        </Media>

                        <Col lg={9} md={9} sm={9}>

                            <Media query="(min-width: 768px) and (min-height: 500px)">
                                <div className={`sushiAdv sushiAdv--1 ${focusReg}`}>
                                    <a href="http://www.region47.sbor.net/" onFocus={() => switchFocusReg('focusUp')} onBlur={() => switchFocusReg('focusNone')}>
                                        <img src="./Images/region47_wide.gif" alt=""/>
                                    </a>
                                </div>
                            </Media>

                            {key === 'sushi'
                                ? firstSushiImage(key)
                                : swiperArr.includes(key)
                                    ? swiperSushiElem(key)
                                    : <SushiContentWrapper>
                                        <div><img src={`./Images/sushi/${key}.gif`} alt={key}/></div>
                                    </SushiContentWrapper>}

                        </Col>
                    </div>
            </div>
        </div>
    );
}

export default Sushi;