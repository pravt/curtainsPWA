import styled from "styled-components";

const ThreeSixty = styled.input`
  right: 11%;
  top: 80%;
  position: absolute;
  width: 26%;
  outline: none;

  @media (orientation: portrait) {
    top: 85%;
    left: 30%;
    position: absolute;
    width: 55%;
    outline: none;
  }
`;

export default ThreeSixty;
