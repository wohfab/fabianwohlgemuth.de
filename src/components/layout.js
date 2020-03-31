import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

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
      <React.Fragment>
        <OuterWrapper>
        <InnerWrapper>
        <Header menuMain={data.site.siteMetadata.menuMain} siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        </InnerWrapper>
        <Footer menuLegal={data.site.siteMetadata.menuLegal} menuSocial={data.site.siteMetadata.menuSocial} />
      </OuterWrapper>
      </React.Fragment>
    )}
  />
)

const OuterWrapper = styled.div`
  margin: 0;
  padding: 0;
  padding: 0;
`

const InnerWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  max-width: ${rhythm(30)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default Layout
