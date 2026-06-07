const { loadMarkdownDir } = require("../_lib/contentLoader");

// One entry per file in content/project-demos/ — each becomes its own page
// via pagination in src/project-demo-detail.njk. Drop a new .md file in to
// add a demo page; delete it to remove one. No template changes needed.
module.exports = function () {
  return loadMarkdownDir("project-demos");
};
