import styled from 'styled-components';

export const ModalWrapper = styled.div`
  font-size: 1.8rem;

  .modal__header {
    background: linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);
    height: 256px;
    padding-top: 32px;

    .pokemon__sprite {
      display: grid;
      place-items: center;
      aspect-ratio: 1/1;
      background: #fff;
      border-radius: 50%;
      border: 4px solid #00D68F;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      width: 247px;

      :hover {
        cursor: pointer;
      }
    }
  }

  .modal__body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    background: #fff;
    border-radius: 24px;
    height: 406px;
    padding: 162px 24px 0 24px;
    margin-top: -100px;
    overflow-y: scroll;
  }

  .input-group {
    width: 100%;
    margin-bottom: 1em;

    label {
      display: block;
      font-size: 1.4rem;
      font-weight: bold;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    input,
    select {
      height: 48px;
      border: 1px solid #ccc;
      padding: 12px 12px;
      width: 100%;
    }
  }

  .modal__title {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #000;
    line-height: 0.1em;
    margin: 10px 0 20px;

    span {
      background:#fff;
      padding:0 10px;
    }
  }

  .modal__button {
    background: #FF3D71;
    border: none;
    border-radius: 42px;
    color: #FFF;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 24px;
    margin: 0 auto 35px auto;
    text-align: center;
    text-decoration: none;
    padding: 16px 24px;
    width: fit-content;

    :hover {
      cursor: pointer;
    }
  }
`;
