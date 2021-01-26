import styled from "styled-components";

const PrismicLogo = styled.input`
  right: 8%;
  bottom: 6%;
  position: absolute;
  width: 6%;
  cursor: default;
  outline: none;
  @media (orientation: portrait) {
    right: 0%;
    bottom: 7%;
    width: 25%;
  }
  @media screen and (min-width: 800px) and (max-width: 812px) and (orientation: landscape) {
    width: 10%;
    right: 5%;
    bottom: 4%;
  }
`;

export default PrismicLogo;
