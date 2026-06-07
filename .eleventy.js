module.exports = function (eleventyConfig) {
  // Static assets pass straight through to the built site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
    pathPrefix: "/resume/",
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
