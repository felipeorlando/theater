import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600");

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 10px;
    line-height: normal;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.light};
    color: ${({ theme }) => theme.text};
    font-family: "Open Sans", Arial, Helvetica, sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.dark};
    margin: 0;
  }

  strong {
    color: ${({ theme }) => theme.dark};
    font-weight: 600;
  }

  [hidden] {
    display: none !important;
  }
`;

export default React.memo(StyledGlobal);
