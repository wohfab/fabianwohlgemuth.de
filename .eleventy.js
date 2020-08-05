const sortByDisplayOrder = require("./src/utils/sort-by-display-order.js");

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/images/");

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
