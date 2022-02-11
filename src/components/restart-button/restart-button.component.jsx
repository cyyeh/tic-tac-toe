import React from 'react'

import {
  RestartBtn
} from './restart-button.styles'

const RestartButton = ({ onClickRestartBtn }) => (
  <RestartBtn onClick={onClickRestartBtn}>
    Restart
  </RestartBtn>
)

export default RestartButton
