import React from "react"
import { Link, graphql } from "gatsby"

import { kebabCase } from "lodash"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All projects" />
        <h1>Alle Projekte</h1>
        <Bio />
        <div className="projects" style={{ margin: "1rem 0 2rem" }}>
          {projects.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} class="project">
                <div class="thumbnail">
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`projects${node.fields.slug}`}
                  >
                    <img
                      src={node.frontmatter.thumbnail.childImageSharp.fluid.src}
                      alt={title}
                    />
                  </Link>
                </div>
                <div class="info">
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`projects${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <ul class="project-tags">
                    {node.frontmatter.categories.map(category => {
                      return (
                        <li class="project-category">
                          <Link
                            className="no-style"
                            to={`/categories/${kebabCase(category)}/`}
                          >
                            {category}
                          </Link>
                        </li>
                      )
                    })}
                    {node.frontmatter.tags.map(tag => {
                      return (
                        <li class="project-tag">
                          <Link
                            className="no-style"
                            to={`/tags/${kebabCase(tag)}/`}
                          >
                            {tag}
                          </Link>
                        </li>
                      )
                    })}
                    {node.frontmatter.tools.map(tool => {
                      return (
                        <li class="project-tool">
                          <Link
                            className="no-style"
                            to={`/tools/${kebabCase(tool)}/`}
                          >
                            {tool}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/projects/" }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            categories
            tools
            featured
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
    }
  }
`
