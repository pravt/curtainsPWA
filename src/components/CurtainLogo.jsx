import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 19%;
  position: absolute;
 
  width: 28%;
  cursor: default;
  outline:none;
  top: 15%;

  @media (orientation: portrait) {
    top: 8%;
    left: 0%;
    position: absolute;
    width: 100%;
  }
  @media (orientation: landscape) {
    top: 2%;
    left: 19%;
    position: absolute;
  }
`;

export default CurtainLogo;
