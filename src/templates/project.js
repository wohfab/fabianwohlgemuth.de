import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { kebabCase } from "lodash"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ProjectsPostTemplate extends React.Component {
  render() {
    const project = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    const tags = this.props.data.mdx.frontmatter.tags
    const tools = this.props.data.mdx.frontmatter.tools
    const categories = this.props.data.mdx.frontmatter.categories

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={project.frontmatter.title}
          description={project.frontmatter.description || project.excerpt}
        />
        <h1>{project.frontmatter.title}</h1>
        <p className="">
          {project.frontmatter.date}
        </p>
        <ul className="project-tags">
          {categories.map(category => {
            return (
              <li className="project-category">
                <Link
                  className="no-style"
                  to={`/categories/${kebabCase(category)}/`}
                >
                  {category}
                </Link>
              </li>
            )
          })}
          {tags.map(tag => {
            return (
              <li class="project-tag">
                <Link className="no-style" to={`/tags/${kebabCase(tag)}/`}>
                  {tag}
                </Link>
              </li>
            )
          })}
          {tools.map(tool => {
            return (
              <li class="project-tool">
                <Link className="no-style" to={`/tools/${kebabCase(tool)}/`}>
                  {tool}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="project-body">
          <MDXRenderer>{project.body}</MDXRenderer>
        </div>
        <hr/>
        <Bio />
        <ul className="">
          <li className="">
            {previous && (
              <Link to={`projects${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="">
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
