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
    <section id="copyright">
      <p>© {new Date().getFullYear()} {data.site.siteMetadata.title}</p>
      {children}
    </section>
)}
/>
)

export default Copyright
