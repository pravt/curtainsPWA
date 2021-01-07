import React from "react";
import styled from "styled-components";

const Degree = styled.input`
  right: 16%;
  top: 24%;
  position: absolute;
  width: 26%;
  outline: none;

  @media (orientation: portrait) {
    top: 60%;
    left: 23%;
    position: absolute;
    width: 50%;
  }
`;

export default Degree;
