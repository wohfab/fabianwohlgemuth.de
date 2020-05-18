import React from "react"
import { Link } from "gatsby"
import PropTypes from 'prop-types'


const Header = ({ siteTitle, menuMain }) => (
  <header className="mb-4 px-6 pt-6 flex justify-between">
    <h2 id="site-title" className="text-2xl mt-0 pt-1"><Link to="/">{siteTitle}</Link></h2>
    <nav id="nav-main" className="" aria-labelledby="nav-main">
      <ul className="flex flex-wrap">
        {menuMain.map(link => (<li className="-ml-2 px-2 sm:-ml-4 sm:px-4" key={link.name}><Link to={link.link}>{link.name}</Link></li>))}
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