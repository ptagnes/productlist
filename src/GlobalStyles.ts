import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 1.3rem;
  }
  main {
      padding: 20px 20px 60px 20px;
      @media (min-width: 550px) {
        padding: 2em 2em 6em 2em;
      }
  }
  header {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 40vh;
    border-bottom: 2px solid #e8eaea;
    background: #e8eaea;
    img {
      width: auto;
      height: 100%;
      @media (min-width: 500px) {
        width: 100%;
        height: auto;
      }
    }
  }
  header div {
    color: #fff;
    background: #19a276;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0rem 2rem;
    
    @media (min-width: 550px) {
      top: 5em;
      left: 3em;
      padding: 2rem 7rem;
    }
  }
  img {
    width: 100%;
  }
`;

export default GlobalStyle;
