import React from "react"
import { Link } from "gatsby"

const NavLegal = () => (
    <nav id="nav-legal" aria-labelledby="nav-legal">
      <h3>Legal</h3>
      <Link to='/'>Terms of Use</Link>
      <Link to='/'>Privacy Policy</Link>
      <Link to='/404'>Test 404</Link>
    </nav>
)

export default NavLegal