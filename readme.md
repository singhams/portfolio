# Sara Ingham's Portfolio

A clean, responsive portfolio website showcasing my UX research and information architecture work. Built with Jekyll and hosted on GitHub Pages.

🔗 [View Live Site](https://singhams.github.io/portfolio)

## 🌟 Features

- Responsive portfolio layout with case studies and artifacts
- Custom wave divider animations and SVG social icons
- Dark/light theme toggle
- Client logo carousel
- Markdown-based content management
- PDF resume downloads
- Optimized image processing pipeline

## 🛠️ Technology Stack

- Jekyll static site generator
- GitHub Pages hosting
- HTML5 & CSS3
- Liquid templating
- Python scripts for content preprocessing
- Docker for local development

## 💻 Local Development

Prerequisites:
- Docker
- Git

Run the site locally:

```bash
docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  --publish=4000:4000 \
  --workdir=/srv/jekyll \
  -it jekyll/jekyll:latest \
  jekyll serve --livereload --host 0.0.0.0
```

Visit `http://127.0.0.1:4000` in your browser. Changes to source files will auto-reload.

### Installing Dependencies

If you modify the Gemfile, run:

```bash
docker run --rm -it \
  --volume="$PWD:/srv/jekyll" \
  --workdir=/srv/jekyll \
  jekyll/jekyll:latest \
  bash -lc "bundle install"
```

## 🚀 Deployment

This site deploys automatically to GitHub Pages when changes are pushed to the main branch.

## 📄 License

This project is shared for reference. You're welcome to use it as inspiration for your own portfolio, but please create your own content and design.

## 📬 Contact

- Email: sara.ingham@gmail.com 
- LinkedIn: [Sara Ingham](https://www.linkedin.com/in/sara-i-58a9025/)
- GitHub: [@singhams](https://github.com/singhams)

## ✨ Acknowledgements

- Built with [Jekyll](https://jekyllrb.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)
- AI assistance from GitHub Copilot