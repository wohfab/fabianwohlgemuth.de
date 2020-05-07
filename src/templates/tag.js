import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class TagRoute extends React.Component {
  render() {
    const projects = this.props.data.allMdx.edges
    const projectLinks = projects.map(project => (
      <li key={project.node.fields.slug}>
        <Link to={`/projects/${project.node.fields.slug}`}>
          {project.node.frontmatter.title}
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMdx.totalCount
    const tagHeader = `${totalCount} project${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="">
          <Helmet title={`${tag} | ${title}`} />
          <div className="">
            <div className="">
              <div className="" style={{ marginBottom: "6rem" }}>
                <h3 className="">{tagHeader}</h3>
                <ul className="">{projectLinks}</ul>
                <p>
                  <Link to="/tags/">Alle Tags anschauen...</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] }, draft: { ne: true } }
        fileAbsolutePath: { regex: "/projects/" }
      }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
