import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class ToolRoute extends React.Component {
  render() {
    const projects = this.props.data.allMdx.edges
    const projectLinks = projects.map(project => (
      <li key={project.node.fields.slug}>
        <Link to={`/projects/${project.node.fields.slug}`}>
          {project.node.frontmatter.title}
        </Link>
      </li>
    ))
    const tool = this.props.pageContext.tool
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMdx.totalCount
    const toolHeader = `${totalCount} Projekt${
      totalCount === 1 ? "" : "e"
    } erstellt mit Hilfe von: “${tool}”`

    return (
      <Layout>
        <section className="">
          <Helmet title={`${tool} | ${title}`} />
          <div className="">
            <div className="">
              <div className="" style={{ marginBottom: "6rem" }}>
                <h1>{toolHeader}</h1>
                <ul className="">{projectLinks}</ul>
                <p>
                  <Link to="/tools/">Alle Tools anschauen...</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ToolRoute

export const toolPageQuery = graphql`
  query ToolPage($tool: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tools: { in: [$tool] }, draft: { ne: true } } }
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
