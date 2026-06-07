module.exports = function (eleventyConfig) {
  // Static assets pass straight through to the built site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // "Project Demos" is the one collection that produces its own pages —
  // built dynamically via pagination over global data (see _data/projectDemos.js
  // and src/project-demo-detail.njk). Adding a .md file under content/project-demos/
  // is enough to add a new page; nothing here needs to change.
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
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
