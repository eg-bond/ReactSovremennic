import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavItem, Nav} from "react-bootstrap";

const NavItems = (props) => {

    const changeDatesArr = (firstDate, datesArr) => {
        return firstDate == "monday"
            ? datesArr
            : [[...datesArr[3]], [...datesArr[4]], [...datesArr[5]], [...datesArr[6]], [...datesArr[0]], [...datesArr[1]], [...datesArr[2]]]
    }

    const finalDatesArr = changeDatesArr("monda", props.datesArr);

    return (
        props.deviceType == "notMobile"
            ? <Nav bsStyle="tabs" className='seans-tabs'>
                {finalDatesArr.map(d => <NavItem eventKey={d[0]}>{d[1]}<br/>{d[2]}</NavItem>)}
            </Nav>
            : <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                {finalDatesArr.map(d => <NavItem eventKey={d[0]} onClick={props.selectModalItem}>{d[1] + " " + d[2]}</NavItem>)}
            </Nav>
    )
}

export default NavItems;