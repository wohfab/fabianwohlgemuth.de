import React from "react"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const CategoriesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="">
      <Helmet title={`Kategorien | ${title}`} />
      <div className="">
        <div className="">
          <div className="">
            <h1 className="">Kategorien</h1>
            <ul className="">
              {group.map(category => (
                <li key={category.fieldValue}>
                  <Link to={`/categories/${kebabCase(category.fieldValue)}/`}>
                    {category.fieldValue} ({category.totalCount})
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

export default CategoriesPage

export const categoryPageQuery = graphql`
  query CategoriesQuery {
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
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
