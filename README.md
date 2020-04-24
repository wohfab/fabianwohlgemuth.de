<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://wohfab.netlify.com">
    <img alt="fabian wohlgemuth - digital creative." src="/content/assets/logos/fwdc_xl_tp.png" width="60" />
  </a>
</p>
<h1 align="center">
  digital creative.
</h1>

## DEV LOG

I am trying to create Tags Pages for my 'Blog Posts' aka *Projects*. I am using [the official Gatsby Docs Tutorial](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/). This tutorial has the following steps:

### 1 Add tags to your markdown files

Done.

### [2 Write a query to get all tags for your posts](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#write-a-query-to-get-all-tags-for-your-posts)

<details>
<summary>The query from the tutorial works</summary>

``` GRAPHQL
{
  allMarkdownRemark {
    group(field: frontmatter___tags) {
      tag: fieldValue
      totalCount
    }
  }
}
```

</details>

<details>
<summary>Query Results</summary>

``` JSON
{
  "data": {
    "allMarkdownRemark": {
      "group": [
        {
          "tag": "COVID-19",
          "totalCount": 1
        },
        {
          "tag": "HTML",
          "totalCount": 1
        },
        {
          "tag": "XML",
          "totalCount": 1
        },
        {
          "tag": "XSLT",
          "totalCount": 1
        },
        {
          "tag": "a cappella",
          "totalCount": 1
        },
        {
          "tag": "cocktails",
          "totalCount": 1
        },
        {
          "tag": "cooking",
          "totalCount": 1
        },
        {
          "tag": "data analysis",
          "totalCount": 1
        },
        {
          "tag": "de",
          "totalCount": 3
        },
        {
          "tag": "drinks",
          "totalCount": 1
        },
        {
          "tag": "dtp",
          "totalCount": 1
        },
        {
          "tag": "en",
          "totalCount": 2
        },
        {
          "tag": "food",
          "totalCount": 1
        },
        {
          "tag": "growth",
          "totalCount": 1
        },
        {
          "tag": "information structure",
          "totalCount": 1
        },
        {
          "tag": "layout",
          "totalCount": 1
        },
        {
          "tag": "music",
          "totalCount": 2
        },
        {
          "tag": "pandas",
          "totalCount": 1
        },
        {
          "tag": "piano",
          "totalCount": 1
        },
        {
          "tag": "python",
          "totalCount": 1
        },
        {
          "tag": "quote",
          "totalCount": 1
        },
        {
          "tag": "singing",
          "totalCount": 2
        },
        {
          "tag": "uni",
          "totalCount": 2
        }
      ]
    }
  }
}
```

</details>

### [3 Make a tags page template (for /tags/{tag})](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#make-a-tags-page-template-for-tagstag)

<details>
<summary>Create file <pre>src/templates/tags.js</pre></summary>

``` JS
import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
```

</details>

### [4 Modify gatsby-node.js to render pages using that template](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#modify-gatsby-nodejs-to-render-pages-using-that-template)

<details>
<summary>Adding stuff to <pre>gatsby-node.js</pre></summary>

``` JS
const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
```

</details>

Since I already have stuff in the `gatsby-node.js`, I kind of fail to pass this step already. How would I go about migrating the code above and my already existing code? You say, I should make it a single query in the code. How would I do this? Where would I afterwards split the pages vs. projects?

I think I got the idea of the split query in exactly this tutorial:

``` JS
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
```

There it says:

> You have referenced two `allMarkdownRemark` fields in your query. To avoid naming collisions you must **alias** one of them. You alias both to make your code more human-readable.

### 5 Make a tags index page (/tags) that renders a list of all tags
### 6 (optional) Render tags inline with your blog posts

## DEV TODO

- [ ] Combine Mdx queries in `gatsby-node.js`
- [ ] Tags
- [ ] Categories
- [ ] Setting up branch system
- [ ] Custom Domain for dev and prod environemtn

## Deploy Status

[![Netlify Status - DEV branch](https://api.netlify.com/api/v1/badges/9cdb9175-3299-43fe-8a7c-b9dbef254f69/deploy-status)](https://app.netlify.com/sites/musing-elion-a13953/deploys) - Deploying to [musing-elion-a13953.netlify.app](https://musing-elion-a13953.netlify.app).