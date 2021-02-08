import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {NavItem, Nav} from "react-bootstrap";

const NavItems = (props) => {

    const switchSeanstable = (e, key) => {
        props.changeButtonTitle(e.target.value)
        props.changeActiveKey(key)
    }

    const desktopNavs = () => {
        return (
            <div className='seans-tabs'>
                {props.datesArr.map(d =>
                    <button value={`${d[1]} ${d[2]}`} key={d[0]} className={props.activeKey === d[0] && 'active'}
                            onClick={(e) => switchSeanstable(e, d[0])}>{d[1]}<br/>{d[2]}
                    </button>)}
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