import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Modal} from "react-bootstrap";
import NavItems from "./NavItems";

function SeansModal(props) {

    let [show, setShow] = useState(false);

    const selectModalItem = (e) => {
        props.changeButtonTitle(e.target.text);
        setShow(false);
    };

    return (
        <div className="modal-container">
            <Button onClick={() => setShow(true)} className='seans_button_xs'>
                <span className="seans_button_xs__title">{props.buttonTitle}</span> <span className="glyphicon glyphicon-chevron-down" aria-hidden="true"/>
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Дата</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NavItems datesArr={props.datesArr} deviceType={"Mobile"} selectModalItem={selectModalItem}/>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default SeansModal;