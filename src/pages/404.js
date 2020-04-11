import React from "react"
import { Link, graphql } from "gatsby"

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
          <li><Link to="/">Start</Link> - the start page</li>
          <li><Link to="/projects">Projects</Link> - overview of the projects</li>
        </ul>
        <p>And here are a few external resources, you might want to check out:</p>
        <ul>
        <li><a href="https://twitter.com/wohfab">Fabian's Twitter Account</a></li>
        <li><a href="https://linkedin.com/in/fabianwohlgemuth">Fabian's CV on LinkedIn</a></li>
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
