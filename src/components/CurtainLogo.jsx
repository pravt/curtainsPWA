import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 29%;
  position: absolute;
  cursor: default;
  outline:none;
  top: 20%;

  @media (orientation: portrait) {
    top: 8%;
    left: 20%;
    position: absolute;

  }
  

  @media screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
    top: 8%;
    left: 25%;
    position: absolute;
    height:30%;
  }
`;

export default CurtainLogo;
