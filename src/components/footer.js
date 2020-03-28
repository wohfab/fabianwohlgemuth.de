import React from "react"
// import { Link } from "gatsby"

import NavLegal from "./nav-legal"
import NavSocial from "./nav-social"
import Copyright from "./copyright"

const Footer = () => (
  <footer id="footer">
    <h2>Footer</h2>
    <NavSocial />
    <NavLegal />
    <Copyright />
  </footer>
)

export default Footer