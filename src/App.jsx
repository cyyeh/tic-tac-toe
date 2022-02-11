import React, { useState } from 'react'

import { AppContainer, PlayersDescription, Player1, Player2 } from './App.styles'

import Board from './components/board/board.component'
import RestartButton from './components/restart-button/restart-button.component'
import GameStateBar from './components/game-state-bar/game-state-bar.component'
import { playerCell, aiCell } from './utils/constants'

const App = () => {
  const [cells, setCells] = useState(
    Array.apply(null, Array(9)).map(() => '')
  )
  const [gameState, setGameState] = useState('')
  const [isPlayerTurn, setIsPlayerTurn] = useState(Math.random() < 0.5)

  const handleRestartBtnClick = () => {
    setIsPlayerTurn(Math.random() < 0.5)
    setCells(Array.apply(null, Array(9)).map(() => ''))
    setGameState('')
  }

  return (
    <AppContainer>
      <GameStateBar
        gameState={gameState}
      />
      <Board
        cells={cells}
        gameState={gameState}
        isPlayerTurn={isPlayerTurn}
        onPlayerTurnChange={isPlayerTurn => setIsPlayerTurn(!isPlayerTurn)}
        onCellsChange={cells => setCells(cells)}
        onGameStateChange={gameState => setGameState(gameState)}
      />
      <PlayersDescription>
        <Player1> Player: {playerCell} </Player1>
        <Player2> AI: {aiCell} </Player2>
      </PlayersDescription>
      <RestartButton 
        onClickRestartBtn={handleRestartBtnClick}
      />
    </AppContainer>
  )
}

export default App
