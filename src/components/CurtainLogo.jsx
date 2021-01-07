import React from "react";
import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 19%;
  position: absolute;
  top: 30%;
  width: 28%;
  cursor: default;

  @media (orientation: portrait) {
    top: 21%;
    left: 30%;
    height: 6%;
    position: absolute;
    width: 40%;
  }
`;

export default CurtainLogo;
