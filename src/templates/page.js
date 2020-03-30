import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends React.Component {
  render() {
    const page = this.props.data.mdx
    const frontmatter = page.frontmatter
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={page.frontmatter.title}
          description={page.frontmatter.description || page.excerpt}
        />
        <h1>{page.frontmatter.title}</h1>
        {frontmatter.bio ? <Bio /> : ''}
        <MDXRenderer>{page.body}</MDXRenderer>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        bio
      }
    }
  }
`
