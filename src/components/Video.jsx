
import styled from "styled-components";

const Video = styled.input`
  right: 14%;
  top: 60%;
  position: absolute;
  width: 30%;
  outline: none;

  @media (orientation: portrait) {
    top: 74%;
    left: 24%;
    position: absolute;
    width: 52%;
    text-decoration: none;
  }
`;

export default Video;
