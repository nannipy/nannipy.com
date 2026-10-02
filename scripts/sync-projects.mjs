import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = 'nannipy';
const EXCLUDED_REPOS = new Set([
  'nannipy.com',
  'nannipy',
  'foxrun_old',
  'capodanno2025'
]);

// Helper to format repository names into readable titles
function formatRepoName(name) {
  if (name.toLowerCase() === 'opengym') return 'OpenGym';
  if (name.toLowerCase() === 'vector4hn') return 'Vector (vector4HN)';
  if (name.toLowerCase() === 'sft-app') return 'SFT Mobile App';
  if (name.toLowerCase() === 'ec-website') return 'EC Website';
  if (name.toLowerCase() === 'rickandmortysearch') return 'Rick and Morty Search';

  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function syncProjects() {
  console.log(`Syncing GitHub projects for @${GITHUB_USERNAME}...`);

  const headers = {
    'User-Agent': 'nannipy-portfolio-sync',
    'Accept': 'application/vnd.github.v3+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const url = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`;

  try {
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`GitHub API responded with status ${res.status}: ${res.statusText}`);
    }

    const repos = await res.json();
    console.log(`Fetched ${repos.length} total repositories from GitHub.`);

    const filtered = repos
      .filter(r => !r.fork && !EXCLUDED_REPOS.has(r.name))
      .map(repo => ({
        id: repo.name,
        name: formatRepoName(repo.name),
        github: repo.html_url,
        link: repo.homepage || repo.html_url,
        description: repo.description || 'Open source project on GitHub.',
        language: repo.language || undefined,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
        topics: repo.topics || [],
        isFeatured: false
      }));

    const outputPath = path.resolve(__dirname, '../src/lib/projects-cache.json');
    await fs.writeFile(outputPath, JSON.stringify(filtered, null, 2), 'utf-8');
    console.log(`Successfully synced ${filtered.length} public projects to ${outputPath}!`);
  } catch (error) {
    console.error('Failed to sync projects from GitHub:', error.message);
    process.exit(1);
  }
}

syncProjects();
