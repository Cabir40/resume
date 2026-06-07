const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: true, typographer: true });

const CONTENT_ROOT = path.join(__dirname, "..", "..", "content");

function contentPath(...segments) {
  return path.join(CONTENT_ROOT, ...segments);
}

// Strips a leading "01-", "02-" sort prefix to derive a clean slug/id.
function stripOrderPrefix(filename) {
  return filename.replace(/^\d+-/, "");
}

function loadMarkdownFile(relativePath) {
  const fullPath = contentPath(relativePath);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { ...data, content: md.render(content) };
}

// Reads every .md file in a content subdirectory, parses front matter,
// renders the markdown body to HTML, and returns entries sorted by filename
// (so "01-", "02-" prefixes control display order).
function loadMarkdownDir(relativeDir) {
  const dirPath = contentPath(relativeDir);
  return fs
    .readdirSync(dirPath)
    .filter((filename) => filename.endsWith(".md"))
    .sort()
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dirPath, filename), "utf8");
      const { data, content } = matter(raw);
      const slug = stripOrderPrefix(filename.replace(/\.md$/, ""));
      return { slug, ...data, content: md.render(content) };
    });
}

module.exports = { loadMarkdownFile, loadMarkdownDir, stripOrderPrefix };
