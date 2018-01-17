import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-areas: "logo . navigation";
  grid-template-columns: min-content auto min-content;
`

const Navigation = styled.nav`
  grid-area: navigation;
`

const StyledLink = styled(Link)`
  height: 48px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-weight: bold;
  padding: 0 16px;

  &:visited {
    color: black;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Navigation>
      <StyledLink to="/">Home</StyledLink>
      {/* <Link to="/about-us">About</Link> */}
    </Navigation>
  </HeaderWrapper>
)

export default Header
