import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavItem, Nav} from "react-bootstrap";

const NavItems = (props) => {

    return (
        props.deviceType == "notMobile"
            ? <Nav bsStyle="tabs" className='seans-tabs'>
                {props.datesArr.map(d => <NavItem key={d[0]} eventKey={d[0]} onClick={(e) => props.changeButtonTitle(e.target.text)}>{d[1]} <br/>{d[2]}</NavItem>)}
            </Nav>
            : <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                {props.datesArr.map(d => <NavItem key={d[0]} eventKey={d[0]} onClick={props.selectModalItem}>{d[1] + " " + d[2]}</NavItem>)}
            </Nav>
    )
}

export default NavItems;