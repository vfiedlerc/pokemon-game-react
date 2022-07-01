import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  /* Modal */
  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 1px rgba(9, 30, 66, 0.31), 0px 4px 8px rgba(9, 30, 66, 0.25);
    max-width: 360px;
    position: relative;
    overflow: hidden;
    width: 100%;
  }
`
