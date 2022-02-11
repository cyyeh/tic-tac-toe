import * as React from 'react'
import { useEffect } from 'react'

import {
  BoardDiv
} from './board.styles'

import Cell from '../cell/cell.component'
import {
  playerCell, aiCell, GameState, CellValue
} from '../../utils/constants'

const Board = ({
  cells,
  gameState,
  isPlayerTurn,
  onGameStateChange,
  onCellsChange,
  onPlayerTurnChange
}): JSX.Element => {
  useEffect(() => {
    if (!isPlayerTurn && gameState === '') {
      // AI make a random move following player's move
      let emptyCells = findAllEmptyCells(cells)
      let pos = emptyCells[Math.floor(Math.random() * emptyCells.length)]
      move(pos, aiCell)
    }
  }, [cells, gameState])

  const findAllEmptyCells = (cells: CellValue[]): number[] => {
    return cells.map((v, i) => v === '' ? i : -1).filter(v => v !== -1)
  }

  // check if 3 cells have same non-empty val - return the winner state; otherwise undefined
  const check3Cells = (
    cells: CellValue[],
    pos0: number,
    pos1: number,
    pos2: number
  ): GameState => {
    if (cells[pos0] === cells[pos1] &&
        cells[pos1] === cells[pos2] &&
        cells[pos0] !== '') {
      if (cells[pos0] === 'X') {
        return 'X Wins!'
      }

      return 'O Wins!'
    }

    return ''
  }

  // check the game state - use the latest move
  const checkGameState = (cells: CellValue[], latestPos: number): GameState => {
    if (gameState !== '') {
      return gameState
    }

    // check row
    let result = check3Cells(
      cells,
      3 * Math.floor(latestPos / 3),
      3 * Math.floor(latestPos / 3) + 1,
      3 * Math.floor(latestPos/3) + 2)
    if (result) {
      return result
    }

    // check col
    result = check3Cells(
      cells,
      latestPos % 3,
      latestPos % 3 + 3,
      latestPos % 3 + 6
    )
    if (result) {
      return result
    }

    // check diagonal
    result = check3Cells(cells, 0, 4, 8)
    if (result) {
      return result
    }
    result = check3Cells(cells, 2, 4, 6)
    if (result) {
      return result
    }

    // check draw - if all cells are filled
    if (findAllEmptyCells(cells).length === 0) {
      return 'Draw'
    }

    return ''
  }

  const move = (pos: number, val: CellValue) => {
    if (gameState === '' && cells[pos] === '') {
      let newCells = [...cells]
      newCells[pos] = val
      onCellsChange(newCells)
      onPlayerTurnChange(isPlayerTurn)
      onGameStateChange(checkGameState(newCells, pos))
    }
  }

  // handle a new move from player
  const handleNewPlayerMove = (pos: number) => move(pos, playerCell)

  return (
    <BoardDiv>
      {cells.map((v: CellValue, i: number) => 
        <Cell
          key={i}
          pos={i}
          val={v}
          handleMove={() => handleNewPlayerMove(i)}
        />
      )}
    </BoardDiv>
  )
}

export default Board
