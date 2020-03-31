import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'


const Header = ({ siteTitle, menuMain }) => (
  <header>
    <h2 id="site-title"><Link to="/">{siteTitle}</Link></h2>
    <nav id="nav-main" aria-labelledby="nav-main">
      <ul>
        {menuMain.map(link => (<li key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header