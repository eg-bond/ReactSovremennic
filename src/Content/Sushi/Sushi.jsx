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

// function Sushi({themeCl, siteMode}) {
//
//     const brandRollsSpecial = [
//         <NavItem className='sushi-tab' eventKey="brand_rolls1">Фирменные роллы 1</NavItem>,
//         <NavItem className='sushi-tab' eventKey="brand_rolls2">Фирменные роллы 2</NavItem>,
//         <NavItem className='sushi-tab' eventKey="brand_rolls3">Фирменные роллы 3</NavItem>
//     ]
//     const hotDishesSpecial = [
//         <NavItem className='sushi-tab' eventKey="hot_dishes1">Горячие блюда 1</NavItem>,
//         <NavItem className='sushi-tab' eventKey="hot_dishes2">Горячие блюда 2</NavItem>,
//         <NavItem className='sushi-tab' eventKey="hot_dishes3">Горячие блюда 3</NavItem>,
//         <NavItem className='sushi-tab' eventKey="hot_dishes4">Горячие блюда 4</NavItem>
//     ]
//     const desktopMenuItem = (eventKey, title) => <NavItem className='sushi-tab' eventKey={eventKey}>{title}</NavItem>
//     const sushiContentItem = (key) => <Tab.Pane eventKey={key}><img src={`./Images/sushi/${key}.gif`} alt={key}/></Tab.Pane>
//
//
//     return (
//         <div>
//             <ScrollToTop/>
//             <div className="sushi_page">
//                 <Tab.Container defaultActiveKey="sushi" id='sushiTab'>
//                     <div>
//
//                         <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
//                             <div className="sushi_menu_xs padding_15xs">
//                                 <SushiModal/>
//                             </div>
//                         </Media>
//
//                         <Media query="(min-width: 768px) and (min-height: 500px)">
//                             <Col lg={3} md={3} sm={3}>
//                                 <Nav className={themeCl.pills} bsStyle="pills" stacked>
//                                     {desktopMenuItem("sushi", "Суши")}
//                                     {desktopMenuItem("rolls", "Роллы")}
//                                     {desktopMenuItem("black_rolls", "Цветные/черные роллы")}
//                                     {desktopMenuItem("hot_rolls", "Запеченые роллы")}
//                                     {
//                                         siteMode === 'default'
//                                         ? desktopMenuItem("brand_rolls", "Фирменные роллы")
//                                         : brandRollsSpecial
//                                     }
//                                     {desktopMenuItem("mini_rolls", "Мини-роллы")}
//                                     {desktopMenuItem("sets", "Наборы, сашими")}
//                                     {desktopMenuItem("salads", "Салаты")}
//                                     {desktopMenuItem("soups", "Супы")}
//                                     {
//                                         siteMode === 'default'
//                                         ? desktopMenuItem("hot_dishes", "Горячие блюда")
//                                         : hotDishesSpecial
//                                     }
//                                     {desktopMenuItem("garnish", "Гарниры")}
//                                     {desktopMenuItem("dessert", "Десерты")}
//                                     {desktopMenuItem("gruzia", "Грузинская кухня")}
//                                     {desktopMenuItem("pizza", "Пицца")}
//                                 </Nav>
//                             </Col>
//                         </Media>
//
//                         <Col lg={9} md={9} sm={9}>
//
//                             <Media query="(min-width: 768px) and (min-height: 500px)">
//                                 <div className="sushiAdv sushiAdv--1">
//                                     <a href="http://www.region47.sbor.net/"><img src="./Images/region47_wide.gif" alt=""/></a>
//                                 </div>
//                             </Media>
//
//                             <Tab.Content animation style={{paddingBottom: "30px"}}>
//                                 <Tab.Pane eventKey="sushi">
//                                     <div className="sushiEmptyImg">
//                                         <img className="sushiFirstImg" src="./Images/sushi/sushi.gif" alt="sushi"/>
//                                     </div>
//                                 </Tab.Pane>
//                                 {sushiContentItem("rolls")}
//                                 {sushiContentItem("black_rolls")}
//                                 {sushiContentItem("hot_rolls")}
//                                 <Tab.Pane eventKey="brand_rolls">
//                                     <BrandRollsSwiper/>
//                                 </Tab.Pane>
//                                 {sushiContentItem("brand_rolls1")}
//                                 {sushiContentItem("brand_rolls2")}
//                                 {sushiContentItem("brand_rolls3")}
//                                 {sushiContentItem("mini_rolls")}
//                                 {sushiContentItem("sets")}
//                                 {sushiContentItem("salads")}
//                                 {sushiContentItem("soups")}
//                                 <Tab.Pane eventKey="hot_dishes">
//                                     <HotDishesSwiper/>
//                                 </Tab.Pane>
//                                 {sushiContentItem("hot_dishes1")}
//                                 {sushiContentItem("hot_dishes2")}
//                                 {sushiContentItem("hot_dishes3")}
//                                 {sushiContentItem("hot_dishes4")}
//                                 {sushiContentItem("garnish")}
//                                 {sushiContentItem("dessert")}
//                                 {sushiContentItem("gruzia")}
//                                 {sushiContentItem("pizza")}
//                             </Tab.Content>
//                         </Col>
//                     </div>
//                 </Tab.Container>
//             </div>
//         </div>
//     );
// }

const Sushi = ({themeCl, siteMode}) => {

    let [key, setKey] = useState('sushi');
    let [activeKey, setActiveKey] = useState('sushi');

    const sushiImageChange = (key) => {
        setKey(key)
        setActiveKey(key)
    }

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


    const firstSushiImage = (key) => {
        return (
            <div className='sushi_page__content' style={{paddingBottom: "30px"}}>
                <div className="sushiEmptyImg">
                    <img className="sushiFirstImg" src={`./Images/sushi/${key}.gif`} alt="sushi"/>
                </div>
            </div>
        )
    }
    const swiperElem = (key) => {
        let swiperEl = key === 'brand_rolls' ? <BrandRollsSwiper/> : <HotDishesSwiper/>
        return (
            <div className='sushi_page__content' style={{paddingBottom: "30px"}}>
                {swiperEl}
            </div>
        )
    }

    const desktopMenuItem = (eventKey, title) => <NavItem className='sushi-tab' eventKey={eventKey}>{title}</NavItem>
    const sushiContentItem = (key) => <Tab.Pane eventKey={key}><img src={`./Images/sushi/${key}.gif`} alt={key}/></Tab.Pane>

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
                                <div>
                                    {siteMode === 'default'
                                        ? defaultSushiArr.map(item => <button onClick={() => setKey(item[0])}>{item[1]}</button>)
                                        : specialSushiArr.map(item => <button onClick={() => setKey(item[0])}>{item[1]}</button>)}
                                </div>
                            </Col>
                        </Media>

                        <Col lg={9} md={9} sm={9}>

                            <Media query="(min-width: 768px) and (min-height: 500px)">
                                <div className="sushiAdv sushiAdv--1">
                                    <a href="http://www.region47.sbor.net/"><img src="./Images/region47_wide.gif" alt=""/></a>
                                </div>
                            </Media>

                            {key === 'sushi'
                                ? firstSushiImage(key)
                                : swiperArr.includes(key)
                                    ? swiperElem(key)
                                    : <div className='sushi_page__content' style={{paddingBottom: "30px"}}>
                                        <div><img src={`./Images/sushi/${key}.gif`} alt={key}/></div>
                                    </div>}

                        </Col>
                    </div>
            </div>
        </div>
    );
}

export default Sushi;