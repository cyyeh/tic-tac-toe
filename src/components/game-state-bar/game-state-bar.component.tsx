import * as React from 'react'
import { InferProps } from 'prop-types'

import { GameState } from '../../utils/constants'

import {
  GameStateBarDiv
} from './game-state-bar.styles'

const GameStateBar = ({ gameState }: InferProps<GameState>): JSX.Element => (
  <GameStateBarDiv>
    {gameState}
  </GameStateBarDiv>
)

export default GameStateBar
