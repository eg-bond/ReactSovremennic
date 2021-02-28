import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Tab} from "react-bootstrap";
import NavItems from "./NavItems";
import SeansModal from "./SeansModal";
import {changeActiveKey, changeButtonTitle, initialActiveKey, initialButtonTitle} from "../../REDUX/seansReduser";
import {compose} from "redux";
import {connect} from "react-redux";
import {CreateTable} from "./CreateTable";
import Media from 'react-media';
import { queries } from '../../helpers';

let table = CreateTable();
let finalTable = [...table];

const Seans = React.memo(({initialActiveKey, initialButtonTitle, themeCl, fontSize, ...props}) => {

    useEffect(() => {
        return () => {
            initialActiveKey();
            initialButtonTitle();
        }
    }, [initialActiveKey, initialButtonTitle]);

    return (
        <div className="col-lg-9 col-md-9 col-sm-9">
            <Tab.Container id='table' activeKey={props.activeKey} onSelect={k => props.changeActiveKey(k)}>
                <div>
                    <Media query={queries.desktop}>
                        <div className={`seans-menu ${props.siteMode === 'special' ? themeCl.navs : ''} `}>
                            <NavItems deviceType={"notMobile"} datesArr={props.datesArr}
                                      changeButtonTitle={props.changeButtonTitle}
                                      changeActiveKey={props.changeActiveKey} activeKey={props.activeKey}
                                      />
                        </div>
                    </Media>

                    <Media query={queries.mobile}>
                        <div className="sushi_menu_xs">
                            <SeansModal datesArr={props.datesArr} buttonTitle={props.buttonTitle}
                                        changeButtonTitle={props.changeButtonTitle}
                                        initialButtonTitle={props.initialButtonTitle}/>
                        </div>
                    </Media>

                    <Tab.Content className="xs350px" animation>
                        {finalTable}
                    </Tab.Content>
                </div>
            </Tab.Container>

            <div className="separator-special"/>
        </div>
    );
});

let mapStateToProps = (state) => ({
    datesArr: state.seansPage.actualDatesArr,
    activeKey: state.seansPage.activeKey,
    buttonTitle: state.seansPage.buttonTitle,
    fontSize: state.special.fontSize
});

export default compose(
    connect(mapStateToProps, {changeButtonTitle, changeActiveKey, initialButtonTitle, initialActiveKey})
)(Seans);