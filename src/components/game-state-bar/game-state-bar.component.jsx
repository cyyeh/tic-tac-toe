import React from 'react'

import {
  GameStateBarDiv
} from './game-state-bar.styles'

const GameStateBar = ({ gameState }) => (
  <GameStateBarDiv>
    {gameState}
  </GameStateBarDiv>
)

export default GameStateBar
