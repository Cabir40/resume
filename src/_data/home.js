const { loadMarkdownFile, loadMarkdownDir } = require("../_lib/contentLoader");

// Aggregates every section/subsection of the "Me" page into one object.
// Each section is its own directory of .md files under content/home/ — add,
// edit, or delete a file there and it shows up here automatically.
module.exports = function () {
  return {
    about: loadMarkdownFile("about/about.md"),
    contact: loadMarkdownFile("contact/contact.md"),
    experience: loadMarkdownDir("home/experience"),
    education: loadMarkdownDir("home/education"),
    publications: loadMarkdownDir("home/publications"),
  };
};
