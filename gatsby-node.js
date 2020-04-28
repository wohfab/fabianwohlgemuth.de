const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const ProjectTemplate = path.resolve(`./src/templates/project.js`)
  const PageTemplate = path.resolve(`./src/templates/page.js`)

  const result = await graphql(
    `{

      pagesRemark: allMdx(
        filter: {fileAbsolutePath: {regex: "/pages/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
            }
          }
        }
      }

      projectsRemark: allMdx(
        filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/projects/"}}
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              description
              categories
              tools
              tags
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

    }`)
    
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create project pages.
  const projects = result.data.projectsRemark.edges

  projects.forEach((project, index) => {
    const previous = index === projects.length - 1 ? null : projects[index + 1].node
    const next = index === 0 ? null : projects[index - 1].node

    createPage({
      path: `projects${project.node.fields.slug}`,
      component: ProjectTemplate,
      context: {
        slug: project.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create pages.
  const pages = result.data.pagesRemark.edges

  pages.forEach((page) => {
    createPage({
      path: `${page.node.fields.slug}`,
      component: PageTemplate,
      context: {
        slug: page.node.fields.slug,
      },
    })
  })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
