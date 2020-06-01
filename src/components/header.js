import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'


const Header = ({ siteTitle, menuMain }) => (
  <header className="flex flex-wrap justify-between max-w-screen-md px-6 pt-6 mx-auto mb-4">
    <h2 id="site-title" className="pt-1 mt-0 text-2xl"><Link to="/">{siteTitle}</Link></h2>
    <nav id="nav-main" className="" aria-labelledby="nav-main">
      <ul className="flex flex-wrap">
        {menuMain.map(link => (<li className="px-2 -ml-2 sm:-ml-4 sm:px-4" key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
        <li><a href="http://photos.fabianwohlgemuth.de/">photos</a></li>
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