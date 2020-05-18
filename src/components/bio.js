import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div className="my-6 grid grid-cols-1 sm:grid-cols-4">
            <Image
              className="mx-auto rounded-full"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
            />
            <p className="sm:col-span-3 sm:ml-6">
              Hej! Ich bin <strong>Fabian Wohlgemuth</strong>, lebe im Norden
              von NRW und begeistere mich für
              <strong>digitale Kreativität</strong>. Wenn Du irgendwas wissen
              magst, schreib' mir doch einfach
              <a
                href="mailto:fw@fabianwohlgemuth.de"
                title="Mail an fw@fabianwohlgemuth.de"
              >
                eine Mail an fw@fabianwohlgemuth.de
              </a>
              .
            </p>
          </div>
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
      }
    }
  }
`

export default Bio
