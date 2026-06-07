const { loadMarkdownFile, loadMarkdownDir } = require("../_lib/contentLoader");

// Aggregates every section/subsection of the "Me" page into one object.
// Each section is its own directory of .md files under content/me/ — add,
// edit, or delete a file there and it shows up here automatically.
module.exports = function () {
  return {
    about: loadMarkdownFile("me/about.md"),
    contact: loadMarkdownFile("me/contact.md"),
    experience: loadMarkdownDir("me/experience"),
    education: loadMarkdownDir("me/education"),
    publications: loadMarkdownDir("me/publications"),
    projects: loadMarkdownDir("me/projects"),
  };
};
