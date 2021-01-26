import styled from "styled-components";

const ThreeSixty = styled.input`
  right: 13%;
  top: 76%;
  position: absolute;
  width: 26%;
  outline: none;

  @media (orientation: portrait) {
    top: 80%;
    left: 24%;
    position: absolute;
    width: 55%;
  }
`;

export default ThreeSixty;
