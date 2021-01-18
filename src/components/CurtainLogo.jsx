import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 19%;
  position: absolute;
 
  width: 28%;
  cursor: default;
  outline:none;

  @media (orientation: portrait) {
    top: 2%;
    left: 4%;
    position: absolute;
    width: 100%;
  }
`;

export default CurtainLogo;
