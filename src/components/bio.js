/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              />
            <p>
              Created by <strong>{author}</strong> who loves the possibilites, that <strong>digital technologies</strong> and <strong>design thinking</strong> bring, to solve everyday problems.
              <br/>
              Since this website is still under heavy devlopment, consider checking out his <a href="https://www.fabianwohlgemuth.de">current website</a> or follow him on <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>.
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/logos/fwdc_sm_tp.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1)};
  margin-bottom: 0;
  min-width: ${rhythm(2)};
  border-radius: 100%;
`


const Container = styled.div`
  display: flex;
  font-size: .9rem;
`

export default Bio
