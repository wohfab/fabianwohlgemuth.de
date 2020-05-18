import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuMain {
              name
              link
            }
            menuLegal {
              name
              link
            }
            menuSocial {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <div className="">
        <div className="min-h-screen">
          <Header
            menuMain={data.site.siteMetadata.menuMain}
            siteTitle={data.site.siteMetadata.title}
          />
          <main className="px-6 max-w-screen-md mx-auto">{children}</main>
        </div>
        <Footer
          className=""
          menuLegal={data.site.siteMetadata.menuLegal}
          menuSocial={data.site.siteMetadata.menuSocial}
        />
      </div>
    )}
  />
)


export default Layout
