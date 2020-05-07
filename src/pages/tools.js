import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const ToolsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="">
      <Helmet title={`Tools | ${title}`} />
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Tools</h1>
            <ul className="">
              {group.map(tool => (
                <li key={tool.fieldValue}>
                  <Link to={`/tools/${kebabCase(tool.fieldValue)}/`}>
                    {tool.fieldValue} ({tool.totalCount})
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ToolsPage

export const toolPageQuery = graphql`
  query ToolsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/projects/" }
      }
    ) {
      group(field: frontmatter___tools) {
        fieldValue
        totalCount
      }
    }
  }
`
