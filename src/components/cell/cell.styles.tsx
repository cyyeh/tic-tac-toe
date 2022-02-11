import styled from 'styled-components'

export const CellDiv = styled.div`
  float: left;
  width: 33.3333%;
  height: 33.3333%;
  line-height: 166.67px;
  color: black;
  font-size:  90pt;
  text-align: center;
  border-color: orangered;
  border-width: 3px;
  cursor: pointer;

  &&.top {
    border-bottom-style:solid;
  }

  &&.bottom {
    border-top-style:solid;
  }

  &&.left {
    border-right-style:solid;
  }

  &&.right {
    border-left-style:solid;
  }

  & > .X {
    animation-name: appear;
    animation-duration: .3s;
  }

  & > .O {
    animation-name: appear;
    animation-duration: .3s;
    animation-delay:.3s;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes appear {
    from { font-size: 90pt; opacity: 0;}
    to { font-size: 100pt; opacity: 1;}
  }
`