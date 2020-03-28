import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Footer from "./footer"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const projectPath = `${__PATH_PREFIX__}/projects/`
    let header

    if (location.pathname === rootPath || location.pathname === projectPath) {
      header = (
        <WebsiteTitle style={{
          ...scale(1.5)
        }}>
          <LinkStyled to={location.pathname === projectPath ? `/projects/` : `/`}>{title}</LinkStyled>
        </WebsiteTitle>
      )
    } else {
      header = (
        <SiteTitle>
          <LinkStyled to={`/projects/`}>{title}</LinkStyled>
        </SiteTitle>
      )
    }
    return (
      <OuterWrapper>
        <InnerWrapper>
            <header>{header}</header>
            <main>{children}</main>
        </InnerWrapper>
        <Footer />
      </OuterWrapper>
    )
  }
}

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

const WebsiteTitle = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0; 
`

const SiteTitle = styled.h2`
  margin-top: 0;
`

const LinkStyled = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

export default Layout
