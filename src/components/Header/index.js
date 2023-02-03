import { Link, useLocation } from "react-router-dom";
import styled from "styled-components"

const Header = ({ isLight, handleClick }) => {
  const location = useLocation()
  const { pathname } = location
  
  const activeElement = (path) => {
    return path === pathname ? "active" : null
  }

  return <Wrapper>
      <nav>
        <Link to="/" className={activeElement("/")}>Home</Link>
        <Link to="/about" className={activeElement("/about")}>About</Link>
      </nav>
      <p>Piano tap</p>
      <Theme onClick={handleClick}>{isLight ? "dark" : "light"}</Theme>
  </Wrapper>
}

const Wrapper = styled.header`
  position: fixed;
  top:0;
  width: calc(100% - 2em);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,.2);
  padding: .4em 1em;
  & nav {
    display: flex;
    gap: 6px
  }
  & a {
    transition: 150ms;
    text-decoration: none;
    color: inherit;
    padding: .4em;
    border-radius: 5px;
    margin: 0;
    border: 1px solid ${props => props.theme.mainColor};
    
  }
  & a.active {
    background-color: ${props => props.theme.backgroundColor}
  }
  & a:hover {
    background-color: ${props => props.theme.backgroundColor}
  }
`;

const Theme = styled.button`
  border-radius: 8px;
  text-align: center;
  min-width: 80px;
  font-size: 120%;
  border: 1px solid ${props => props.theme.mainColor};
  background-color: rgba(0,0,0,.2);
  color: ${props => props.theme.mainColor};
  padding: .4em;
  cursor: pointer
`;

export default Header