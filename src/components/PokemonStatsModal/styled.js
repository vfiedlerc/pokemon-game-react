import styled from 'styled-components';

export const ModalWrapper = styled.div`
  font-size: 1.8rem;

  .pokemon__top {
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

      img {
        width: 200px;
      }
    }
  }

  .pokemon__stats {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: #fff;
    border-radius: 24px;
    height: 406px;
    padding: 162px 8px 0 8px;
    margin-top: -100px;
  }

  .pokemon__name {
    font-weight: 700;
  }

  .pokemon__name-editable {
    display: flex;
    align-items: center;
    gap: 1em;

    :hover {
      cursor: pointer;
    }
  }

  .pokemon__info-container {
    width: 80%;
  }

  .pokemon__infos {
    display: flex;
    /* justify-content: space-between; */
    padding: 42px 0;
    border-bottom: 1px solid #C5CEE0;
  }

  .pokemon__info {
    text-align: center;
    width: 33%;

    + .pokemon__info {
      border-left: 1px solid #C5CEE0;
    }
  }

  .pokemon__info-name {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 16px;
  }

  .pokemon__info-value {
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 24px;
  }

  .pokemon__types {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding-top: 40px;
  }

  .pokemon__type {
    background: #67AF32;
    border-radius: 42px;
    color: #fff;
    padding: 0.75em 2em;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
  }

  .pokeball {
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translate(-50%, 0);

    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));

    :hover {
      cursor: pointer;
    }
  }

  .pokemon__free-btn {
    position: absolute;
    left: 50%;
    bottom: 65px;
    transform: translate(-50%, 0);

    background: #FF3D71;
    border: none;
    border-radius: 42px;
    color: #FFF;
    filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31)) drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
    text-decoration: none;
    padding: 16px 24px;
    width: fit-content;

    :hover {
      cursor: pointer;
    }
  }
`;
