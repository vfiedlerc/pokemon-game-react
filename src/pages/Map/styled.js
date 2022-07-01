import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-size: cover;
  height: 100vh;

  .ash-container {
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .balloon {
      visibility: hidden;
    }

    .character {
      :hover {
        cursor: pointer;
      }
    }
  }
`;
