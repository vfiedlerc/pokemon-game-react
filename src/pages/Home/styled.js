import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  place-items: center;
  background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .button {
    background: #FF3D71;
    border-radius: 42px;
    color: #FFF;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    padding: 16px 24px;
    width: 124px;
  }
`;
