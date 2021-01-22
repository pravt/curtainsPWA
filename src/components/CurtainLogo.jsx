import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 29%;
  position: absolute;
  cursor: default;
  outline:none;
  top: 20%;

  @media (orientation: portrait) {
    top: 10%;
    left: 0%;
    position: absolute;
    width: 100%;
  }
  

  @media screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
    top: 8%;
    left: 15%;
    position: absolute;
  }
`;

export default CurtainLogo;
