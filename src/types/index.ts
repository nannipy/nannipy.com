
export type ExperienceItem = {
  id: string;
  name: string;
  link: string;
  github: string;
  description: string;
  screenshots?: string[];
  logo?: string;
  language?: string | null;
  stars?: number;
  pushedAt?: string;
  updatedAt?: string;
  topics?: string[];
  isFeatured?: boolean;
};
