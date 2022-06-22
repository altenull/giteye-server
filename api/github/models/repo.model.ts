import { GithubSharedUser } from "./user.model.ts";

export interface GithubRepo {
  id: number;
  node_id: string;
  name: string; // e.g. "Hello-World"
  full_name: string; // e.g. "octocat/Hello-World"
  owner: GithubSharedUser;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string | null;
  language: string | null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string; // e.g. "master"
  open_issues_count: number;
  is_template: boolean;
  topics: string[]; // e.g. ["octocat", "atom", "electron", "api"]
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: "public" | "private" | "internal";
  pushed_at: string; // e.g. "2011-01-26T19:06:43Z"
  created_at: string; // e.g. "2011-01-26T19:01:12Z"
  updated_at: string; // e.g. "2011-01-26T19:14:43Z"
  permissions: {
    admin: boolean;
    push: boolean;
    pull: boolean;
  };
  template_repository: null;
}

export interface Repo {
  id: number;
  node_id: string;
  name: string; // e.g. "Hello-World"
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  topics: string[]; // e.g. ["octocat", "atom", "electron", "api"]
  size: number;
  archived: boolean;
  fork: boolean;
  pushed_at: string; // e.g. "2011-01-26T19:06:43Z"
  created_at: string; // e.g. "2011-01-26T19:01:12Z"
  updated_at: string; // e.g. "2011-01-26T19:14:43Z"
  description?: string;
  homepage?: string;
  language?: string;
}
