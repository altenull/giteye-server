import { GithubUser, User } from "../models/user.model.ts";

export const githubUserToUser = ({
  login,
  id,
  avatar_url,
  name,
  company,
  location,
  email,
  bio,
  followers,
  following,
  created_at,
}: GithubUser): User => {
  return {
    id,
    login,
    avatar_url,
    followers_total: followers,
    following_total: following,
    created_at,
    ...(name != null && { name }),
    ...(company != null && { company }),
    ...(location != null && { location }),
    ...(email != null && { email }),
    ...(bio != null && { bio }),
  };
};
