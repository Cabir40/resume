# Cabir Celik — Portfolio

Personal portfolio site for **Cabir Celik**, Lead Data Scientist specializing
in healthcare AI and clinical NLP — production Spark NLP, LLM/RAG, and
clinical de-identification systems built at [John Snow Labs](https://www.johnsnowlabs.com/).

**Live site:** https://cabir40.github.io/resume/

## What's here

A static, single-page site (no build step — plain `index.html` + `css/`)
covering:

- About / specializations
- Experience (John Snow Labs and prior roles)
- Education (incl. M.Sc. thesis on RAG optimization for healthcare LLMs)
- Publications & writing (thesis, papers, John Snow Labs blog, Medium)
- Key projects
- Technical skills
- Certificates
- Contact / profile links (LinkedIn, GitHub, Medium)

Design system documented in [DESIGN.md](DESIGN.md). Certificates and papers
are linked out to rather than committed here, to keep the repo light.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Served via GitHub Pages from the `main` branch root — no build step required.
