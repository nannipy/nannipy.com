# Architecture & Design

This document outlines the technical decisions and architecture of the Nannipy portfolio project.

## 🏗️ Overview

The application is a **Single Page Application (SPA)** with dynamic routing, built on the **Next.js App Router**. It prioritizes speed, modern aesthetics, and ease of maintenance.

### Key Architectural Pillars

1. **Static-First Data Management**
   - Project metadata and work experience are stored as typed constants in `src/lib/`.
   - This eliminates the need for a database, reducing complexity and hosting costs.

2. **Dynamic Content Integration**
   - The project detail pages (`/projects/[slug]`) use **Octokit** to fetch the `README.md` directly from GitHub.
   - Content is sanitized using `DOMPurify` and rendered via `react-markdown`, ensuring the portfolio is always in sync with the actual repository documentation.

3. **Motion-Driven UI**
   - **Framer Motion** is used for entrance animations and interactive transitions.
   - The "terminal" aesthetic is achieved through a combination of custom fonts and Tailwind CSS utility classes.

4. **Isomorphic Theme Management**
   - Dark/Light mode is handled via `next-themes`, ensuring no flash of unstyled content (FOUC) and persistent user preferences.

## 📦 Component Strategy

- **`src/components/ui/`**: Low-level, stateless components (e.g., icons).
- **`src/components/`**: Feature-specific components like `ProfileCard` or `ExperienceSection`.
- **`src/app/`**: Composes components into layouts and pages.
