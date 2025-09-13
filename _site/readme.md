# Sara Ingham — Portfolio

This repository contains the source for my personal portfolio website built with Jekyll and hosted on GitHub Pages.

Live demo: https://singhams.github.io/portfolio (replace with actual URL)

## Features
- Responsive portfolio and blog layout
- Custom wave footer and inline SVG social icons
- Dark / light theme toggle
- Easy to customize content via Markdown and Jekyll includes

## Tech
- Jekyll
- GitHub Pages
- HTML, CSS, Liquid templates
- Docker (for local development)

## Local development (using Docker)
From the repository root run:

```bash
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish=4000:4000 \
  --workdir=/srv/jekyll \
  -it jekyll/jekyll:latest \
  jekyll serve --livereload --host 0.0.0.0
```

Open http://127.0.0.1:4000 in your browser.

Notes:
- The container mounts the repo into /srv/jekyll so changes are reflected immediately.
- If your site uses additional gems declared in a Gemfile, run:
  docker run --rm -it --volume="$PWD:/srv/jekyll" --workdir=/srv/jekyll jekyll/jekyll:latest bash -lc "bundle install"

## Deploy
This site is intended to be deployed on GitHub Pages. Push changes to the repository — Pages will build automatically (or use GitHub Actions if configured).

## Contributing
No one needs to contribute, but I'm welcome to comments. If people want to copy and start their own that's fine. I'm just sharing for fun.

If you do open-source this project, consider adding a LICENSE (MIT is common).

## License
If you open-source this repo, add a LICENSE file. Example: MIT License.

## Contact
- Email: sara.ingham@gmail.com
- LinkedIn: https://www.linkedin.com/in/sara-i-58a9025/
- GitHub: https://github.com/singhams

## Acknowledgements
- Built with Jekyll and hosted on GitHub Pages
- UI icons: inline SVG (Bootstrap icons used)
- AI‑assisted by GitHub Copilot
```<!-- filepath: /Users/saraingham/portfolio/README.md -->
# Sara Ingham — Portfolio