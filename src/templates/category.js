import React from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

class CategoryRoute extends React.Component {
  render() {
    const projects = this.props.data.allMdx.edges
    const projectLinks = projects.map(project => (
      <li key={project.node.fields.slug}>
        <Link to={`/projects/${project.node.fields.slug}`}>
          {project.node.frontmatter.title}
        </Link>
      </li>
    ))
    const category = this.props.pageContext.category
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMdx.totalCount
    const categoryHeader = `${totalCount} Projekt${
      totalCount === 1 ? "" : "e"
    } in: “${category}”`

    return (
      <Layout>
        <section className="">
          <Helmet title={`${category} | ${title}`} />
          <div className="">
            <div className="">
              <div className="" style={{ marginBottom: "6rem" }}>
                <h3 className="">{categoryHeader}</h3>
                <ul className="">{projectLinks}</ul>
                <p>
                  <Link to="/categories/">Alle Kategorien anschauen...</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CategoryRoute

export const categoryPageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { categories: { in: [$category] }, draft: { ne: true } }
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
