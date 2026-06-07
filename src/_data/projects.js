const { loadMarkdownDir } = require("../_lib/contentLoader");

// Loads project entries from content/home/projects/.
module.exports = function () {
  return loadMarkdownDir("home/projects");
};
