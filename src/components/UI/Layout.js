import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./Globalstyle";
import { useState } from "react";


import lightTheme from "./themes/light.json"
import darkTheme from "./themes/dark.json"

import Header from "components/Header";
import Footer from "components/Footer";


const Layout = ({ children }) => {
  const darkmode = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [isLight, setIsLight] = useState(darkmode)

  const handleClick = () => {
    setIsLight(!isLight)
  }

  return <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
    <Wrapper>
      <GlobalStyle/>
      <Header isLight={isLight} handleClick={handleClick} />
      <Content>
      { children }
      </Content>
      <Footer />
    </Wrapper>
    {/* <button onClick={handleClick}>switch mode : {isLight ? "dark" : "light"}</button> */}
  </ThemeProvider>
}

const Wrapper = styled.div`

`

const Content = styled.section`
  max-width: 1024px;
  width: calc( 100% - 2.8em - 2px );
  margin: 0.4em auto;
  height: calc(100vh - 8.7em);
  overflow: auto;
`

export default Layout