
<div align="center">
  <img src="public/favicon.svg" alt="Portfolio Logo" width="80" height="80">
  <h1>Nannipy's Portfolio</h1>

  <p>
    <a href="https://nannipy.com">View Demo</a>
    ·
    <a href="https://github.com/nannipy/nannipy/issues">Report Bug</a>
    ·
    <a href="https://github.com/nannipy/nannipy/issues">Request Feature</a>
  </p>

</div>

---



<p align="center">
  <a href="https://nannipy.com"><img src="https://img.shields.io/website?url=https%3A%2F%2Fnannipy.com" alt="Website"></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel"></a>
</p>


A modern, interactive personal portfolio for **Giovanni Battista Pernazza**, built with **Next.js** and **React 19**. Featuring a clean, terminal-inspired interface with dark mode, smooth animations, and dynamic project data fetching.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **API**: [Octokit](https://github.com/octokit/octokit.js) (Fetching READMEs from GitHub)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Repository Structure

- `src/app/`: Next.js App Router pages and layouts.
- `src/components/`: Reusable UI components (ThemeSwitcher, ProfileCard, etc.).
- `src/lib/`: Static data for projects and work experience.
- `src/styles/`: Global CSS and third-party style overrides.
- `public/`: Static assets (project screenshots, logos, favicons).

## 🛠️ Performance & Independence

This project is designed to be **lightweight** and **independent**:
- **Zero Database**: Project data is managed via static files and dynamic GitHub API calls.
- **Minimal Dependencies**: Unused libraries (like bcrypt/Prisma) have been removed to keep the bundle size small.
- **Turbopack**: Uses the latest Next.js build tools for fast development cycles.

## 💻 Developer Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/)

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build
```bash
npm build
npm start
```

## 📄 License
This project is open-source and available under the MIT License.
