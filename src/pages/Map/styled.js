import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;

  .character {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    :hover {
      cursor: pointer;
    }
  }
`;
