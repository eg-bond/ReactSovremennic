import React from 'react'
import { Tab } from 'react-bootstrap'
import scedule from './scedule.js'

export const CreateTable = () => {
  let table = []
  // Outer loop to create parent
  for (let elem in scedule) {
    let children = []
    //Inner loop to create children
    for (let j = 0; j < scedule[elem].length; j++) {
      children.push(
        <tr
          key={`${elem}${j}`}
          className={j % 2 === 0 ? 'table_gray' : 'table_white'}>
          <td>{scedule[elem][j][0]}</td>
          <td>{scedule[elem][j][1]}</td>
          <td>{scedule[elem][j][2]}</td>
        </tr>
      )
    }
    //Create the parent and add the children

    table.push(
      <Tab.Pane key={elem} eventKey={elem}>
        <table className='table_custom'>
          <tbody>
            <tr className={`table_head`}>
              <th>Сеанс</th>
              <th>Фильм</th>
              <th>Цена, руб</th>
            </tr>
            {children}
          </tbody>
        </table>
      </Tab.Pane>
    )
  }
  return table
}
