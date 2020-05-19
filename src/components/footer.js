import React from "react"
import { Link } from "gatsby"

import Copyright from "./copyright"
import ThemeToggle from "./themetoggle"

const Footer = ({ menuLegal, menuSocial }) => (
  <div id="footer-wrapper" className="">
    <footer id="footer" className="p-6">
      <div className="flex flex-wrap gap-12 max-w-screen-md mx-auto sm:px-6">
        <nav id="nav-social" aria-labelledby="nav-social">
          <h3 class="footer-heading" id="nav-social">
            Soziales
          </h3>
          <ul>
            {menuSocial.map(link => (
              <li key={link.name}>
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav id="nav-legal" aria-labelledby="nav-legal">
          <h3 class="footer-heading" id="nav-legal">
            Rechtliches
          </h3>
          <ul>
            {menuLegal.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Copyright>
        <ThemeToggle />
      </Copyright>
    </footer>
  </div>
)

export default Footer
