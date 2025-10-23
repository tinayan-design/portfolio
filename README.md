# UI/UX Designer Portfolio

A modern, responsive portfolio website built with Astro, TypeScript, and Tailwind CSS. Perfect for showcasing UI/UX design projects with a focus on performance and user experience.

## ✨ Features

- **Fast & Modern**: Built with Astro for optimal performance
- **Content Management**: Easy-to-manage projects using Markdown files
- **Responsive Design**: Looks great on all devices
- **SEO Optimized**: Built-in SEO features and meta tags
- **GitHub Pages Ready**: Automated deployment workflow included
- **Accessible**: WCAG compliant design patterns

## 🚀 Quick Start

1. **Clone and install dependencies**
   ```bash
   git clone https://github.com/yourusername/tina-portfolio.git
   cd tina-portfolio
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Your site will be available at `http://localhost:4321`

3. **Customize your portfolio**
   - Update personal information in `src/pages/index.astro`
   - Add your projects in `src/content/projects/`
   - Replace placeholder images with your own

## 📁 Project Structure

```text
/
├── public/
│   └── images/projects/          # Project images
├── src/
│   ├── components/               # Reusable components
│   │   ├── Header.astro
│   │   └── ProjectCard.astro
│   ├── content/
│   │   ├── config.ts            # Content collections config
│   │   └── projects/            # Project markdown files
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   └── projects/[...slug].astro  # Dynamic project pages
│   └── styles/
│       └── global.css           # Global styles
├── .github/workflows/
│   └── deploy.yml               # GitHub Pages deployment
└── astro.config.mjs             # Astro configuration
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/pages/index.astro` - Name, bio, contact information
- `src/layouts/Layout.astro` - Site title and meta description
- `astro.config.mjs` - Site URL and base path

### Adding Projects
1. Create a new `.md` file in `src/content/projects/`
2. Use this frontmatter template:
   ```yaml
   ---
   title: "Project Title"
   description: "Brief project description"
   image: "https://example.com/image.jpg"
   tags: ["Tag1", "Tag2", "Tag3"]
   featured: true
   projectUrl: "https://example.com"
   date: 2024-01-01
   order: 1
   ---
   ```
3. Write your project details in Markdown below the frontmatter

### Styling
- The project uses Tailwind CSS for styling
- Customize colors and design in the component files
- Global styles are in `src/styles/global.css`

## 🚀 Deployment to GitHub Pages

1. **Update configuration**
   - Change `site` and `base` in `astro.config.mjs` to match your repository
   - Update repository name if different from 'tina-portfolio'

2. **Enable GitHub Pages**
   - Go to your repository Settings > Pages
   - Select "GitHub Actions" as the source
   - Push your code to the `main` branch

3. **Automatic deployment**
   - The site will automatically deploy when you push to main
   - Find your live site at `https://yourusername.github.io/tina-portfolio`

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`     |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **Content**: Markdown with frontmatter

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Astro and deployed on GitHub Pages