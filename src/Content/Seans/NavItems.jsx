import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavItem, Nav} from "react-bootstrap";

const NavItems = (props) => {
    const desktopNavs = () => {
        return (
            <div>
                <Nav bsStyle="tabs" className='seans-tabs'>
                    {props.datesArr.map(d => <NavItem key={d[0]} eventKey={d[0]}
                                                      onClick={(e) => props.changeButtonTitle(e.target.text)}>{d[1]}
                        <br/>{d[2]}</NavItem>)}
                </Nav>
            </div>
        )
    }
    const mobileNavs = () => {
        return (
            <div>
                <Nav bsStyle="tabs" className='seans-tab-xs sushi-tab-xs' stacked>
                    {props.datesArr.map(d => <NavItem key={d[0]} eventKey={d[0]} onClick={props.selectModalItem}>{d[1] + " " + d[2]}</NavItem>)}
                </Nav>
            </div>
        )
    }

    return (
        props.deviceType === "notMobile" ? desktopNavs() : mobileNavs()
    )
}

export default NavItems;