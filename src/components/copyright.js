import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Copyright = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <section id="copyright" className="mt-6 flex justify-between max-w-screen-md mx-auto">
        <p>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </p>
        {children}
      </section>
    )}
  />
)

export default Copyright
