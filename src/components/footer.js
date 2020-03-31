import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

import Copyright from "./copyright"
import ThemeToggle from "./themetoggle"

const Footer = ({ menuLegal, menuSocial }) => (
  <FooterWrapper id="footer-wrapper">
    <FooterStyled id="footer">
      <h2>Footer</h2>
      <Menus>
      <nav id="nav-social" aria-labelledby="nav-social">
        <h2 id="nav-social">Social</h2>
        <ul>
          {menuSocial.map(link => (<li key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
        </ul>
      </nav>
      <nav id="nav-legal" aria-labelledby="nav-legal">
        <h2 id="nav-legal">Legal</h2>
        <ul>
          {menuLegal.map(link => (<li key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
        </ul>
      </nav>
      </Menus>
      <hr />
      <Copyright>
        <ThemeToggle />
      </Copyright>
    </FooterStyled>
  </FooterWrapper>
)

const Menus = styled.div`

`

const FooterWrapper = styled.div`
`

const FooterStyled = styled.footer`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default Footer