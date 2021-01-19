import styled from 'styled-components'

const RightMenuBurger = styled.input`
  right: 0%;
  top: 0%;
  position: absolute;
  width: 5%;
  outline: none;
  background-color: white;
  border-radius: 40px;

  @media (orientation: portrait) {
    top: 0%;
    width: 15%;
    outline: none;
    background-color: white;
    border-radius: 40px;
    right: 1%;
    outline: none;
  }

  @media (orientation: landscape) {
    top: 0%;
    outline: none;
    background-color: white;
    right: 1%;
  }
`

export default RightMenuBurger
