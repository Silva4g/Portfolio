import { createGlobalStyle } from 'styled-components';
import color from './colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${color.background};
    color: ${color.foreground};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    color: #bcc2cd;
    transition: color 0.3s linear;
    text-decoration: none;
    &:hover {
      color: ${color.orange};
    }
  }
`;
