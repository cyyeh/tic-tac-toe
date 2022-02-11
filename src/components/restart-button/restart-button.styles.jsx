import styled from 'styled-components'

export const RestartBtn = styled.a`
  box-shadow: 3px 3px 9px 2px #54a3f7;
  background-color:#007dc1;
  border-radius:28px;
  border:1px solid #124d77;
  cursor:pointer;
  color:#ffffff;
  font-size:25px;
  font-weight:bold;
  padding:15px 36px;
  text-decoration:none;
  text-shadow:0px 0px 7px #154682;
  position: relative;
  display: block;
  margin: 40px auto;
  width: 160px;
  text-align: center;

  &:hover {
    background-color:#0061a7;
  }

  &:active {
    position:relative;
    top:1px;
  }
`
