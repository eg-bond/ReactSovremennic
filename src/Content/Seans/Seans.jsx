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

let table = CreateTable();
let finalTable = [...table];

const Seans = React.memo(({initialActiveKey, initialButtonTitle, ...props}) => {

    useEffect(() => {
        return () => {
            initialActiveKey();
            initialButtonTitle();
        }
    }, [initialActiveKey, initialButtonTitle]);

    return (
        <div className="col-lg-9 col-md-9 col-sm-9 margin-top-xs">
            <Tab.Container id='table' activeKey={props.activeKey} onSelect={k => props.changeActiveKey(k)}>
                <div>

                    <Media query="(min-width: 768px) and (min-height: 500px)">
                        <div className="seans-menu">
                            <NavItems deviceType={"notMobile"} datesArr={props.datesArr}
                                      changeButtonTitle={props.changeButtonTitle}/>
                        </div>
                    </Media>

                    <Media query="(max-width: 767.8px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)">
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
            </Tab.Container>;
            <div className="separator-special"/>
        </div>
    );
});

let mapStateToProps = (state) => ({
    datesArr: state.seansPage.actualDatesArr,
    activeKey: state.seansPage.activeKey,
    buttonTitle: state.seansPage.buttonTitle
});

export default compose(
    connect(mapStateToProps, {changeButtonTitle, changeActiveKey, initialButtonTitle, initialActiveKey})
)(Seans);