import type { ExperienceItem } from '../types';
import { projectItems } from './projects';
import fallbackCache from './projects-cache.json';

const GITHUB_USERNAME = 'nannipy';
const EXCLUDED_REPOS = new Set([
  'nannipy.com',
  'nannipy',
  'foxrun_old',
  'capodanno2025',
]);

interface GitHubRepoResponse {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
}

function formatRepoName(name: string): string {
  if (name.toLowerCase() === 'opengym') return 'OpenGym';
  if (name.toLowerCase() === 'vector4hn') return 'Vector (vector4HN)';
  if (name.toLowerCase() === 'sft-app') return 'SFT Mobile App';
  if (name.toLowerCase() === 'ec-website') return 'EC Website';
  if (name.toLowerCase() === 'rickandmortysearch') return 'Rick and Morty Search';
  if (name.toLowerCase() === 'aesculapius') return 'Aesculapius';
  if (name.toLowerCase() === 'oikos') return 'Oikos — Trattoria Moderna';

  return name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function matchesRepo(curated: ExperienceItem, repoName: string, repoUrl: string): boolean {
  const normRepoName = repoName.toLowerCase().replace(/[-_]/g, '');
  const normCuratedId = curated.id.toLowerCase().replace(/[-_]/g, '');
  const curatedGitUrl = (curated.github || '').toLowerCase();
  const repoUrlNorm = repoUrl.toLowerCase().replace(/\.git$/, '');

  return (
    normCuratedId === normRepoName ||
    curated.id.toLowerCase() === repoName.toLowerCase() ||
    curatedGitUrl === repoUrlNorm ||
    curatedGitUrl.endsWith(`/${repoName.toLowerCase()}`) ||
    curatedGitUrl.endsWith(`/${repoName.toLowerCase()}.git`)
  );
}

export async function fetchRawGitHubRepos(): Promise<GitHubRepoResponse[]> {
  const headers: Record<string, string> = {
    'User-Agent': 'nannipy-portfolio',
    'Accept': 'application/vnd.github.v3+json',
  };

  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
      {
        headers,
        next: { revalidate: 3600 }, // ISR: Revalidate every hour
      }
    );

    if (!res.ok) {
      console.warn(`GitHub API returned status ${res.status}. Using cached repository data.`);
      return [];
    }

    const data = (await res.json()) as GitHubRepoResponse[];
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.warn('Network error when fetching GitHub repos. Using cached data.', error);
    return [];
  }
}

export async function getProjects(): Promise<{
  featured: ExperienceItem[];
  all: ExperienceItem[];
}> {
  const liveRepos = await fetchRawGitHubRepos();

  // If live fetch was empty or failed, fallback to static cache
  const reposSource: Array<{
    name: string;
    html_url: string;
    homepage?: string | null;
    description?: string | null;
    language?: string | null;
    stargazers_count?: number;
    pushed_at?: string;
    updated_at?: string;
    topics?: string[];
  }> =
    liveRepos.length > 0
      ? liveRepos.filter((r) => !r.fork && !EXCLUDED_REPOS.has(r.name))
      : (fallbackCache as ExperienceItem[]).map((c) => ({
          name: c.id,
          html_url: c.github,
          homepage: c.link,
          description: c.description,
          language: c.language,
          stargazers_count: c.stars || 0,
          pushed_at: c.pushedAt,
          updated_at: c.updatedAt,
          topics: c.topics,
        }));

  // Track matched curated projects
  const matchedCurated = new Set<string>();

  const dynamicItems: ExperienceItem[] = reposSource.map((repo) => {
    // Check if repo corresponds to one of our curated projects
    const curated = projectItems.find((p) => matchesRepo(p, repo.name, repo.html_url));

    if (curated) {
      matchedCurated.add(curated.id);
      return {
        ...curated,
        stars: repo.stargazers_count ?? curated.stars,
        language: repo.language ?? curated.language,
        pushedAt: repo.pushed_at,
        updatedAt: repo.updated_at,
        topics: repo.topics ?? curated.topics,
        isFeatured: true,
      };
    }

    // Auto-generated project item for new GitHub repos
    return {
      id: repo.name,
      name: formatRepoName(repo.name),
      github: repo.html_url,
      link: repo.homepage && repo.homepage.trim() !== '' ? repo.homepage : repo.html_url,
      description: repo.description || 'Open source project on GitHub.',
      language: repo.language ?? undefined,
      stars: repo.stargazers_count ?? 0,
      pushedAt: repo.pushed_at,
      updatedAt: repo.updated_at,
      topics: repo.topics ?? [],
      isFeatured: false,
    };
  });

  // Also include any curated projects that might not be in the public repo list
  // (e.g. collaborative repos under another org or private ones)
  const remainingCurated = projectItems.filter((p) => !matchedCurated.has(p.id));

  // Build Featured List: All curated projects
  const featured = projectItems.map((curated) => {
    const matched = dynamicItems.find((d) => d.id === curated.id);
    return matched || curated;
  });

  // Build All Repositories list: All dynamic items + remaining curated, sorted by recent activity
  const all = [...dynamicItems, ...remainingCurated].sort((a, b) => {
    const timeA = a.pushedAt ? new Date(a.pushedAt).getTime() : 0;
    const timeB = b.pushedAt ? new Date(b.pushedAt).getTime() : 0;
    return timeB - timeA;
  });

  return { featured, all };
}

export async function getProjectBySlug(slug: string): Promise<ExperienceItem | null> {
  // 1. Check curated projects first
  const curated = projectItems.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase() || matchesRepo(p, slug, '')
  );
  if (curated) return curated;

  // 2. Check cached dynamic projects
  const { all } = await getProjects();
  const cached = all.find(
    (p) => p.id.toLowerCase() === slug.toLowerCase() || matchesRepo(p, slug, '')
  );
  if (cached) return cached;

  // 3. Directly attempt GitHub API lookup for the slug
  try {
    const headers: Record<string, string> = {
      'User-Agent': 'nannipy-portfolio',
      'Accept': 'application/vnd.github.v3+json',
    };
    if (process.env.GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${slug}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const repo = (await res.json()) as GitHubRepoResponse;
      return {
        id: repo.name,
        name: formatRepoName(repo.name),
        github: repo.html_url,
        link: repo.homepage || repo.html_url,
        description: repo.description || 'Open source project on GitHub.',
        language: repo.language ?? undefined,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
        topics: repo.topics || [],
        isFeatured: false,
      };
    }
  } catch (err) {
    console.error(`Error resolving project by slug "${slug}":`, err);
  }

  return null;
}
