const { loadMarkdownDir } = require("../_lib/contentLoader");

// One entry per file in content/projects/ — each becomes its own page
// via pagination in src/project-detail.njk. Drop a new .md file in to
// add a project page; delete it to remove one. No template changes needed.
module.exports = function () {
  return loadMarkdownDir("projects");
};
