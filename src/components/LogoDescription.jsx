import React from "react";
import styled from "styled-components";

const LogoDescription = styled.p`
  left: 18%;
  top: 48%;
  right: 51%;
  position: absolute;
  text-align: center;
  color: white;
  background: transparent;
  font-size: 1em;
  letter-spacing: 0px;

  @media (orientation: portrait) {
    top: 28%;
    left: 28%;
    width: 45%;
    position: absolute;
    font-size: 0.7em;
    padding:0;
    margin:0;
    text-align: center;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    top: 48%;
    left: 18%;
    position: absolute;
    text-align: center;
    font-size: 0.7em;
    padding:0;
    margin:0;
  } 
`;

export default LogoDescription;
