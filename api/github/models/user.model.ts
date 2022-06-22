import { GithubPlan } from "./plan.model.ts";

export interface GithubSharedUser {
  login: string; // e.g. "altenull"
  id: number;
  node_id: string;
  avatar_url: string; // e.g. "https://avatars.githubusercontent.com/u/26947777?v=4"
  gravatar_id: string;
  url: string; // e.g. "https://api.github.com/users/altenull"
  html_url: string; // e.g. "https://github.com/altenull"
  followers_url: string; // e.g. "https://api.github.com/users/altenull/followers"
  following_url: string; // e.g. "https://api.github.com/users/altenull/following{/other_user}"
  gists_url: string; // e.g. "https://api.github.com/users/altenull/gists{/gist_id}"
  starred_url: string; // e.g. "https://api.github.com/users/altenull/starred{/owner}{/repo}"
  subscriptions_url: string; // e.g. "https://api.github.com/users/altenull/subscriptions"
  organizations_url: string; // e.g. "https://api.github.com/users/altenull/orgs"
  repos_url: string; // e.g. "https://api.github.com/users/altenull/repos"
  events_url: string; // e.g. "https://api.github.com/users/altenull/events{/privacy}"
  received_events_url: string; // e.g. "https://api.github.com/users/altenull/received_events"
  type: string; // e.g. "User"
  site_admin: boolean;
}

export interface GithubUser extends GithubSharedUser {
  name: string | null; // e.g. "Heonyoung Kim"
  company: string | null; // e.g. "Glassdome inc."
  blog: string; // e.g.  "https://altenull.github.io"
  location: string | null; // e.g.  "Seoul, South Korea"
  email: string | null; // e.g.  "altenull@gmail.com";
  hireable: boolean | null;
  bio: string; // e.g. "Frontend developer"
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string; // e.g. "2017-04-06T02:02:51Z"
  updated_at: string; // e.g.  "2022-06-04T06:19:32Z"
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: GithubPlan;
}

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  followers_total: number;
  following_total: number;
  created_at: string;
  name?: string;
  company?: string;
  location?: string;
  email?: string;
  bio?: string;
}

export interface GithubSearchUser extends GithubSharedUser {
  score: number; // e.g. 1.0
}

export interface SearchUser {
  id: number;
  login: string;
  avatar_url: string;
}
