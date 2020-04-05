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
          <Container className="bio">
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              />
            <p>
              Hej! Ich bin Fabian Wohlgemuth, lebe im Norden von NRW und begeistere mich für digital Kreativität.
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/images/fw_portrait.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
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
