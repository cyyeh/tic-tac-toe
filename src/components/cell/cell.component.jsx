import React from 'react'

import {
  CellDiv
} from './cell.styles'

const Cell = ({ pos, val, handleMove }) => {
  const posToClassName = (pos) => {
    let className = 'cell'
    switch (Math.floor(pos / 3)) {
      case 0:
        className += ' top'
        break
      case 2:
        className += ' bottom'
        break
      default:
        break
    }
    switch (pos % 3) {
      case 0:
        className += ' left'
        break
      case 2:
        className += ' right'
        break
      default:
        break
    }

    return className
  }

  return (
    <CellDiv className={posToClassName(pos)} onClick={handleMove}>
      <div className={val}>{val}</div>
    </CellDiv>
  )
}

export default Cell
