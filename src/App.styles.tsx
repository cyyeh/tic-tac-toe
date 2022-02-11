import styled, { css } from 'styled-components'

const Description = css`
  cursor:pointer;
  font-size:25px;
  font-weight:bold;
  padding:15px 0px;
  position: relative;
  display: inline-block;
  width: 150px;
  text-align: center;
  margin-top: 30px;
`

export const AppContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  margin: 20px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export const PlayersDescription = styled.div`
  display: flex;
  justify-content: center;
`

export const Player1 = styled.span`
  ${Description}
`

export const Player2 = styled.span`
  ${Description}
`
