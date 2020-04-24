import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from 'gatsby-image'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class ProjectsPostTemplate extends React.Component {
  render() {
    const project = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = this.props.data.mdx.frontmatter.tags
    const tools = this.props.data.mdx.frontmatter.tools
    const categories = this.props.data.mdx.frontmatter.categories
    const thumbnailSource = this.props.data.mdx.frontmatter.thumbnail.childImageSharp.fluid.src

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        />
        <h1>{project.frontmatter.title}</h1>
        <Image fluid={thumbnailSource} alt="thumbnail" />
        <p class="project-date"
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {project.frontmatter.date}
        </p>
        <ul class="project-tags">
          {categories.map((category) => { return(
            <li class="project-category">{category}</li>
          )})}
          {tags.map((tag) => { return(
            <li class="project-tag">{tag}</li>
          )})}
          {tools.map((tool) => { return(
            <li class="project-tool">{tool}</li>
          )})}
        </ul>
        <div class="project-body">
        <MDXRenderer>{project.body}</MDXRenderer>
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`projects${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`projects${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default ProjectsPostTemplate

export const pageQuery = graphql`
  query ProjectsPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
        tags
        tools
        thumbnail {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
