# emirkulusoy.github.io

Static site, no build step. Edit `index.html` directly.

## Deploying over the old Jekyll site
1. Delete from the repo: `index.markdown`, `about.markdown`, `_posts/`, `_layouts/`, `_includes/`, `Gemfile`, `Gemfile.lock`, `_config.yml` (keep them on a branch if you want history).
2. Copy in everything from this folder, including the hidden `.nojekyll` file.
3. Commit and push to `main`. GitHub Pages serves it within a minute or two.

## Common edits
- New CV: replace `assets/Emir_Ulusoy_CV.pdf` (keep the file name so links don't break).
- Post previews: each card in the "Posts on LinkedIn" strip uses an image from `assets/img/`. To show an actual screenshot of the post, add it under `assets/img/posts/` and change that card's `src`.
- New work item: copy one `<article class="entry">` block. `data-group` is one of data, ai, tools, rf. Add class `feature` to make it full width.
