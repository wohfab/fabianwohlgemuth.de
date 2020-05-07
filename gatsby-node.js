const _ = require("lodash")
const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const ProjectTemplate = path.resolve(`./src/templates/project.js`)
  const PageTemplate = path.resolve(`./src/templates/page.js`)

  const result = await graphql(
    `
      {
        pagesRemark: allMdx(
          filter: { fileAbsolutePath: { regex: "/pages/" } }
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
          filter: {
            frontmatter: { draft: { ne: true } }
            fileAbsolutePath: { regex: "/projects/" }
          }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
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
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create project pages.
  const projects = result.data.projectsRemark.edges

  projects.forEach((project, index) => {
    const previous =
      index === projects.length - 1 ? null : projects[index + 1].node
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

  // Tag pages:
  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  projects.forEach((project, index) => {
    if (_.get(project, `node.frontmatter.tags`)) {
      tags = tags.concat(project.node.frontmatter.tags)
    }
  })
  // Eliminate duplicate tags
  tags = _.uniq(tags)

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tag.js`),
      context: {
        tag,
      },
    })
  })

  // Category pages:
  let categories = []
  // Iterate through each post, putting all found tags into `categories`
  projects.forEach((project, index) => {
    if (_.get(project, `node.frontmatter.categories`)) {
      categories = categories.concat(project.node.frontmatter.categories)
    }
  })
  // Eliminate duplicate categories
  categories = _.uniq(categories)

  // Make tag pages
  categories.forEach(category => {
    const categoryPath = `/categories/${_.kebabCase(category)}/`

    createPage({
      path: categoryPath,
      component: path.resolve(`src/templates/category.js`),
      context: {
        category,
      },
    })
  })

  // Tool pages:
  let tools = []
  // Iterate through each post, putting all found tags into `tools`
  projects.forEach((project, index) => {
    if (_.get(project, `node.frontmatter.tools`)) {
      tools = tools.concat(project.node.frontmatter.tools)
    }
  })
  // Eliminate duplicate tools
  tools = _.uniq(tools)

  // Make tag pages
  tools.forEach(tool => {
    const toolPath = `/tools/${_.kebabCase(tool)}/`

    createPage({
      path: toolPath,
      component: path.resolve(`src/templates/tool.js`),
      context: {
        tool,
      },
    })
  })

  // Create pages.
  const pages = result.data.pagesRemark.edges

  pages.forEach(page => {
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
