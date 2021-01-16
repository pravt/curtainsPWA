
import styled from "styled-components";

const Video = styled.input`
  right: 11%;
  top: 65%;
  position: absolute;
  width: 32%;
  outline: none;

  @media (orientation: portrait) {
    top: 80%;
    left: 28%;
    position: absolute;
    width: 52%;
    outline: none;
    text-decoration: none;
  }
`;

export default Video;
