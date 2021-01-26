import styled from "styled-components";

const PrismicLogo = styled.input`
  right: 8%;
  bottom: 2%;
  position: absolute;
  width: 8%;
  cursor: default;
  outline: none;
  @media (orientation: portrait) {
    right: 0%;
    bottom: 7%;
    width: 15%;
  }
  @media screen and (min-width: 800px) and (max-width: 812px) and (orientation: landscape) {
    width: 9%;
    right: 5%;
    bottom: 0%;
  }
`;

export default PrismicLogo;
