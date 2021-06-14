import React from 'react'
import scedule from './scedule.js'

export const SeansTableContent = () => {
  let sceduleArr = Object.values(scedule)

  let tableContent = sceduleArr.map(dayItem => {
    let contentItem = dayItem.map((dayItem, index) => (
      <tr
        key={`day${index}`}
        className={index % 2 === 0 ? 'table_gray' : 'table_white'}>
        <td>{dayItem[0]}</td>
        <td>{dayItem[1]}</td>
        <td>{dayItem[2]}</td>
      </tr>
    ))
    return contentItem
  })
  return tableContent
}
