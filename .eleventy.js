module.exports = function (eleventyConfig) {

  return {
    templateFormats : ["html", "md", "jpg"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };
};
