import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-areas: ". logo .";
  grid-template-columns: auto max-content auto;
  color: #cfd8dc;
  text-align: center;
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
    color: inherit;
  }
`

const Logo = styled.h1`
  grid-area: logo;
`

const Header = () => (
  <HeaderWrapper>
    <Logo>
      <StyledLink to="/">OSRS Dashboard</StyledLink>
    </Logo>
  </HeaderWrapper>
)

export default Header
