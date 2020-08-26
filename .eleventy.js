const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';

const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = (config) => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Only minify HTML if we are in production because it slows builds _right_ down
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform);
  }

  // Plugins
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxHighlight);

  // Returns project items, sorted by display order
  config.addCollection("projects", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/projects/*.md")
    );
  });

  // Returns project items, sorted by display order then filtered by featured
  config.addCollection("featuredProjects", (collection) => {
    return sortByDisplayOrder(
      collection.getFilteredByGlob("./src/projects/*.md")
    ).filter((x) => x.data.featured);
  });

  // Returns a list of people ordered by filename
  config.addCollection('people', collection => {
    return collection.getFilteredByGlob('./src/people/*.md').sort((a, b) => {
      return Number(a.fileSlug) > Number(b.fileSlug) ? 1 : -1;
    });
  });

  // Returns a collection of posts in reverse date order
  config.addCollection('writing', collection => {
    return [...collection.getFilteredByGlob('./src/writing/*.md')].filter( x => ! x.data.draft).reverse();
  });

  config.addPassthroughCopy("./src/assets");
  config.addPassthroughCopy("./src/images");

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    /* use Nunjucks templating engine */
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      /* set input and output directories */
      input: "src",
      output: "dist",
    },
  };
};
