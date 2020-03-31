import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'


const Header = ({ siteTitle, menuMain }) => (
  <header>
    <div>
      <div>
        <h1><Link to="/">{siteTitle}</Link></h1>
        <div>
          <nav>
            <ul>
              {menuMain.map(link => (<li key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header