import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"


import NavLegal from "./nav-legal"
import NavSocial from "./nav-social"
import Copyright from "./copyright"
import ThemeToggle from "./themetoggle"

const Footer = () => (
  <FooterWrapper id="footer-wrapper">
    <FooterStyled id="footer">
      <h2>Footer</h2>
      <Menus>
      <NavSocial />
      <NavLegal />
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