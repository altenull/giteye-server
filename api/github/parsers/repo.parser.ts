import { GithubRepo, Repo } from "../models/repo.model.ts";

export const githubRepoToRepo = ({
  id,
  node_id,
  name,
  html_url,
  stargazers_count,
  watchers_count,
  topics,
  size,
  archived,
  fork,
  pushed_at,
  created_at,
  updated_at,
  description,
  homepage,
  language,
}: GithubRepo): Repo => {
  return {
    id,
    node_id,
    name,
    html_url,
    stargazers_count,
    watchers_count,
    topics,
    size,
    archived,
    fork,
    pushed_at,
    created_at,
    updated_at,
    ...(description != null && { description }),
    ...(homepage != null && { homepage }),
    ...(language != null && { language }),
  };
};
