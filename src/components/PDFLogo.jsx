import styled from "styled-components";

const PDFLogo = styled.input`
  right: 18%;
  top: 44%;
  position: absolute;
  width: 24%;
  outline: none;

  @media (orientation: portrait) {
    top: 70%;
    left: 24%;
    position: absolute;
    width: 46%;
  }
`;

export default PDFLogo;
