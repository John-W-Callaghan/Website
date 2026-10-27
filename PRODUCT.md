# Product

**What it is.** The personal portfolio of John Callaghan: an AI and security engineer with an
MSc in Cyber Security from UEA. Three static pages (home, projects, certifications) hosted on
GitHub Pages at `john-w-callaghan.github.io/Website/`.

**Who reads it.** Graduate hiring managers, engineering leads and recruiters for UK software
engineering roles, usually arriving from a CV or LinkedIn link and spending under two minutes.
Secondary readers are security-minded engineers checking whether the work is real.

**Primary job.** Let a reader confirm, fast, that John ships real software, from AI systems to
secure backends, then reach the evidence (repos, reports, verifiable certificates) or get in touch.

**How it should feel.** Like a well-kept engineering document: calm, precise, text-first,
nothing decorative that does not carry information. Credibility comes from specifics
(6,000 iterations, 84% accuracy, FIPS 204), not from effects.

**Constraints.**
- Static hosting on GitHub Pages: no build step, no server, no framework runtime.
- `.nojekyll` is present so `.well-known/` is published.
- Strict CSP via `<meta>`: no inline scripts or styles anywhere.
- Must work with JavaScript disabled, except search and filtering on the projects page.
