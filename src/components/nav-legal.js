import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"
import { rhythm } from "../utils/typography"

const NavLegal = () => (
    <nav id="nav-legal" aria-labelledby="nav-legal">
      <h3>Legal</h3>
      <LegalLinks>
        <LegalLink><LegalLinkA to="">Terms of Use</LegalLinkA></LegalLink>
        <LegalLink><LegalLinkA to="">Privacy Policy</LegalLinkA></LegalLink>
        <LegalLink><LegalLinkA to="">404</LegalLinkA></LegalLink>
      </LegalLinks>
    </nav>
)

const LegalLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rhythm(.5)} 0;
  list-style: none;
  padding-left: 0;
`

const LegalLink = styled.li `
  margin: 0;
  padding-right: ${rhythm(1)};
  display: inline;
`

const LegalLinkA = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export default NavLegal