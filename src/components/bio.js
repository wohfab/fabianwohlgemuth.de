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
              Kreiert von <strong>{author}</strong>, der die Möglichkeiten der <strong>Digitalisierung</strong> nutzt, um, gepaart mit überlegter Kreativität, alle im Leben und Schaffen ein kleines Stückchen weiter zu bringen.

              <br />

              Fabian liebt <strong>Musik</strong> über alles, singt für sein Leben gerne, ist bekennender <strong>Technik</strong>-Über-Enthusiast und passionierter <strong>Pfadfinder</strong>, mit einem Hang zu Poesie und dem Blick für <strong>Kreativität</strong>.

              <br />
            
              Lies gerne einmal in seinem <a href="https://linkedin.com/in/fabianwohlgemuth">Lebenslauf auf LinkedIn</a> oder schreibe ihm <a href="mailto:fw@fabianwohlgemuth.de">eine Mail</a>.
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
