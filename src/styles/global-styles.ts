import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
      }
      #__next {
        min-height: 100vh;
      }
      .container {
        background-color: #000;
        color: #fff;
        height: 100%;
        min-height: 100vh;
        display: flex;
        flex: 1;
        justify-content: center;
      }
      main {
          

      }
      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    `;

export default GlobalStyle;
