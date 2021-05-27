import React, { useState } from 'react'
import { Modal, Nav, NavItem } from 'react-bootstrap'

export function SushiModal({ hideImg, activeKey, defaultSushiArr }) {
  let [show, setShow] = useState(false)
  const handleClose = key => {
    hideImg(key)
    setShow(false)
  }

  return (
    <div className='modal-container'>
      <button onClick={() => setShow(true)} className='seans_button_xs '>
        <span className='seans_button_xs__title'>Меню</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Меню</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Nav bsStyle='tabs' className='seans-tab-xs sushi-tab-xs' stacked>
            {defaultSushiArr.map(d => (
              <NavItem
                className={activeKey === d[0] && 'active'}
                key={d[0]}
                eventKey={d[0]}
                onClick={() => handleClose(d[0])}>
                {d[1]}
              </NavItem>
            ))}
          </Nav>
        </Modal.Body>
      </Modal>
    </div>
  )
}
