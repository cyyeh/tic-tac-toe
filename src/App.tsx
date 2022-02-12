import * as React from 'react'
import { useState, useEffect } from 'react'
import { observeDeep } from '@syncedstore/core'
import { useSyncedStore } from '@syncedstore/react'
import * as Y from 'yjs'

import { AppContainer, PlayersDescription, Player1, Player2 } from './App.styles'

import Board from './components/board/board.component'
import RestartButton from './components/restart-button/restart-button.component'
import GameStateBar from './components/game-state-bar/game-state-bar.component'
import { GameState, playerCell, aiCell, CellValue } from './utils/constants'
import { id, roomId, store } from './utils/store'

const App = (): JSX.Element => {
  let state = useSyncedStore(store)

  const getCells = (): CellValue[] => {
    const cells = state.cells
    if (cells) {
      return cells as CellValue[]
    } else {
      return [] as CellValue[]
    }
  }
  const getGameState = (): GameState => {
    const gameState = state.gameState.toString()
    if (gameState) {
      return gameState as GameState
    } else {
      return '' as GameState
    }
  }
  const dispatch = (key: string, val: any) => {
    if (key === 'gameState' && state.gameState.toString() !== val) {
      state.gameState.insert(0, val)
    } else if (key === 'cells') {
      state.cells.splice(0, state.cells.length, ...val as string[])
    }
  }

  const [cells, setCells] = useState<CellValue[]>(getCells())
  const [gameState, setGameState] = useState<GameState>(getGameState())
  const [isPlayerTurn, setIsPlayerTurn] = useState<boolean>(true) //Math.random() < 0.5

  useEffect(() => {
    if (roomId !== id) {
      window.location.href = `${window.location.href}?id=${id}` 
    }
  }, [])

  useEffect(() => {
    const unRegisterListener = observeDeep(state, handleUpdateState)

    return () => {
      () => unRegisterListener()
    }
  })

  const handleUpdateState = () => {
    const storeGameState = getGameState()
    if (gameState !== storeGameState) {
      setGameState(storeGameState)
    }
    setCells(getCells())
  }

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
        onCellsChange={cells => dispatch('cells', cells)}
        onGameStateChange={gameState => dispatch('gameState', gameState)}
        onPlayerTurnChange={(isPlayerTurn) => setIsPlayerTurn(!isPlayerTurn)}
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
