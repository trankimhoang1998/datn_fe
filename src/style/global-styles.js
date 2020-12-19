import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif !important;
    font-weight: 550;
    font-size: 16px;
    font-size: 1rem;
    line-height: 2;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
