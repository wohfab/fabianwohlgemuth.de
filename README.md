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

### 2 Write a query to get all tags for your posts

<details>
<summary>

The [query from the tutorial](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#write-a-query-to-get-all-tags-for-your-posts) works
</summary>

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

### 3 Make a tags page template (for /tags/{tag})
### 4 Modify gatsby-node.js to render pages using that template
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