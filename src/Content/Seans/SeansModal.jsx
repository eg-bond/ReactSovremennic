import React, { useState, useRef } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

export function MenuListComposition(props) {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const switchSeanstable = (event, key, title) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    props.changeButtonTitle(title)
    props.changeActiveKey(key)
    setOpen(false)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <div>
      <button
        className='seans_button_xs'
        ref={anchorRef}
        onClick={handleToggle}>
        <span className='seans_button_xs__title'>{props.buttonTitle}</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        transition
        placement={'bottom-start'}
        className={'seansPopper'}
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper className={`paper`}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}>
                  {props.datesArr.map(d => (
                    <MenuItem
                      className={props.activeKey === d[0] ? 'active' : ''}
                      key={`${d[0]}_s`}
                      onClick={e =>
                        switchSeanstable(e, d[0], `${d[1]} ${d[2]}`)
                      }>
                      {d[1]} {d[2]}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export const SeansModal = props => {
  let [show, setShow] = useState(false)

  const selectModalItem = e => {
    props.changeButtonTitle(e.target.text)
    setShow(false)
  }

  return (
    <div className='modal-container'>
      {/* <Button onClick={() => setShow(true)} className='seans_button_xs'>
        <span className='seans_button_xs__title'>{props.buttonTitle}</span>{' '}
        <span className='glyphicon glyphicon-chevron-down' aria-hidden='true' />
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Дата</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NavItems
            datesArr={props.datesArr}
            deviceType={'Mobile'}
            selectModalItem={selectModalItem}
          />
        </Modal.Body>
      </Modal> */}
    </div>
  )
}

// export default SeansModal
