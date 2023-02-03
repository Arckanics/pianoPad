import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    transition: linear 150ms;
    color: ${props=>props.theme.mainColor};
    background-color: ${props=>props.theme.backgroundColor};
    padding-top: 3.5em;
  }
`

export default GlobalStyle