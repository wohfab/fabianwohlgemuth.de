import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Error 404 <span role="img" aria-label="see-no-evil emoji">🙈</span></h1>
        <p>This resource does not (yet) exit (at this place). If you need help, finding a page, consider, checking the Sitemap.</p>
        <p>Here are a few awesome pages on this website, you might be interested in:</p>
        <ul>
          <li><a href="/">Start</a> - the start page</li>
          <li><a href="/blog">Blog</a> - overview of the blog posts</li>
        </ul>
        <p>And here are a few external resources, you might want to check out:</p>
        <ul>
        <li><a href="https://twitter.com">Twitter</a> - because people live there</li>
        <li><a href="https://reddit.com">Reddit</a> - because people <em>actually</em> live there</li>
        </ul>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
