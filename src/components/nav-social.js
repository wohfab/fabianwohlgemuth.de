import React from "react"

import styled from "styled-components"
import { rhythm } from "../utils/typography"

const NavSocial = () => (
    <nav id="nav-social" aria-labelledby="nav-social">
      <h3>Social</h3>
      <SocialLinks>
        <SocialLink><SocialLinkA href="/">Twitter</SocialLinkA></SocialLink>
        <SocialLink><SocialLinkA href="/">Telegram</SocialLinkA></SocialLink>
        <SocialLink><SocialLinkA href="/">LinkedIn</SocialLinkA></SocialLink>
        <SocialLink><SocialLinkA href="/">GitHub</SocialLinkA></SocialLink>
      </SocialLinks>
    </nav>
)

const SocialLinks = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 0 ${rhythm(.5)} 0;
  list-style: none;
  padding-left: 0;
`

const SocialLink = styled.li `
  margin: 0;
  padding-right: ${rhythm(1)};
  display: inline;
`

const SocialLinkA = styled.a`
  text-decoration: none;
  color: inherit;
`

export default NavSocial