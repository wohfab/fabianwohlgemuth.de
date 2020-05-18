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
      <OuterWrapper className="">
        <InnerWrapper className="min-h-screen">
          <Header
            menuMain={data.site.siteMetadata.menuMain}
            siteTitle={data.site.siteMetadata.title}
          />
          <main className="px-6">{children}</main>
        </InnerWrapper>
        <Footer
          className=""
          menuLegal={data.site.siteMetadata.menuLegal}
          menuSocial={data.site.siteMetadata.menuSocial}
        />
      </OuterWrapper>
    )}
  />
)

const OuterWrapper = styled.div`
  margin: 0;
  padding: 0;
  padding: 0;
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: ${rhythm(30)};
`

export default Layout
