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
        const { author } = data.site.siteMetadata
        return (
          <Container className="bio">
            <StyledImage
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              />
            <p>
              Hej! Ich bin <strong>Fabian Wohlgemuth</strong>, lebe im Norden von NRW und begeistere mich für <strong>digitale Kreativität</strong>. Wenn Du irgendwas wissen magst, schreib' mir doch einfach <a href="mailto:fw@fabianwohlgemuth.de" title="Mail an fw@fabianwohlgemuth.de">eine Mail an fw@fabianwohlgemuth.de</a>.
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
        fixed(width: 160, height: 160) {
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
  font-size: .9rem;
`

export default Bio
