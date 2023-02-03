import styled from "styled-components"

const Footer = () => {
  return <Wrapper>
    <p>The Footer</p>
  </Wrapper>
}

const Wrapper = styled.footer`
  font-size: 75%;
  background-color: ${props => props.theme.backgroundColor};
  padding: 1.2em 1em;
  position: fixed;
  width: calc(100% - 2em);
  border-top: solid 1px ${props => props.theme.mainColor};
  bottom: 0;
`;

export default Footer