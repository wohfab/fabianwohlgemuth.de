import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { rhythm } from "../utils/typography"

const NavMain = () => (
    <nav id="nav-legal" aria-labelledby="nav-legal">
      <h3>Legal</h3>
      <MainLinks>
        <MainLink><MainLinkA to="/">Terms of Use</MainLinkA></MainLink>
        <MainLink><MainLinkA to="/">Privacy Policy</MainLinkA></MainLink>
        <MainLink><MainLinkA to="/">404 Test Page</MainLinkA></MainLink>
      </MainLinks>
    </nav>
)

const MainLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rhythm(.5)} 0;
  list-style: none;
  padding-left: 0;
`

const MainLink = styled.li `
  margin: 0;
  padding-right: ${rhythm(1)};
  display: inline;
`

const MainLinkA = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default NavMain