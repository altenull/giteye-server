import { Response } from "https://deno.land/x/oak/mod.ts";
import GithubApiService from "./github-api.service.ts";
import { SearchUser, User } from "./models/user.model.ts";
import { Repo } from "./models/repo.model.ts";
import { Languages } from "./models/languages.model.ts";

const githubApiService = new GithubApiService();

export const getUser = async ({
  params,
  response,
}: {
  params: { userName: string };
  response: Response;
}) => {
  const user: User = await githubApiService.getUser(params.userName);

  if (user != null) {
    response.status = 200;
    response.body = user;
  }
};

export const searchUsers = async ({
  params,
  response,
}: {
  params: { q: string };
  response: Response;
}) => {
  const searchUsers: SearchUser[] = await githubApiService.serachUsers(
    params.q
  );

  if (searchUsers != null) {
    response.status = 200;
    response.body = searchUsers;
  }
};

export const getRepos = async ({
  params,
  response,
}: {
  params: { userName: string };
  response: Response;
}) => {
  const repos: Repo[] = await githubApiService.getRepos(params.userName);

  if (repos != null) {
    response.status = 200;
    response.body = repos;
  }
};
export const getLanguages = async ({
  params,
  response,
}: {
  params: { userName: string; repoName: string };
  response: Response;
}) => {
  const languages: Languages = await githubApiService.getLanguages(
    params.userName,
    params.repoName
  );

  if (languages != null) {
    response.status = 200;
    response.body = languages;
  }
};
