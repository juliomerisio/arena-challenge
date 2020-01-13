import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import colors from './colors';

export default createGlobalStyle`
/* Reset CSS: */
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');

  * {
    margin: 0;
    padding: 0; 
    outline: 0;
    box-sizing: border-box;

  }
  html {
    font-size: 62.5%;
  }

  body {
    background: ${colors.black};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }
  a, button {
    outline: none;
  }

  /* Font Sizes */

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  strong {
    font-size: 1.8rem;
  }
  small {
    font-size: 1.6rem;
  }



`;
