import { errorHandler } from "./github-api.helper.ts";
import { githubApiInstance } from "./github-api.ts";
import { GithubUser, SearchUser, User } from "./models/user.model.ts";
import { GetGithubSerachUsersResponse } from "./models/user-api.model.ts";
import { GithubRepo, Repo } from "./models/repo.model.ts";
import { githubRepoToRepo } from "./parsers/repo.parser.ts";
import { Languages } from "./models/languages.model.ts";
import {
  githubSearchUserToSearchUser,
  githubUserToUser,
} from "./parsers/user.parser.ts";

const GITHUB_API_END_POINT = "https://api.github.com";

export default class GithubApiService {
  // https://docs.github.com/en/rest/users/users#get-a-user
  async getUser(userName: string): Promise<User> {
    const url = `${GITHUB_API_END_POINT}/users/${userName}`;

    return (await githubApiInstance<GithubUser>(url)
      .then(githubUserToUser)
      .catch(errorHandler)) as User;
  }

  // https://docs.github.com/en/rest/search#search-users
  async serachUsers(q: string): Promise<SearchUser[]> {
    const url = `${GITHUB_API_END_POINT}/search/users?q=${q}`;

    return (await githubApiInstance<GetGithubSerachUsersResponse>(url)
      .then(
        ({
          total_count,
          incomplete_results,
          items,
        }: GetGithubSerachUsersResponse) =>
          items.map(githubSearchUserToSearchUser)
      )
      .catch(errorHandler)) as SearchUser[];
  }

  // https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
  async getRepos(userName: string): Promise<Repo[]> {
    const url = `${GITHUB_API_END_POINT}/users/${userName}/repos`;

    return (await githubApiInstance<GithubRepo[]>(url)
      .then((data: GithubRepo[]) => data.map(githubRepoToRepo))
      .catch(errorHandler)) as Repo[];
  }

  // https://docs.github.com/en/rest/repos/repos#list-repository-languages
  async getLanguages(userName: string, repoName: string): Promise<Languages> {
    const url = `${GITHUB_API_END_POINT}/repos/${userName}/${repoName}/languages`;

    return (await githubApiInstance<Languages>(url)
      .then((data: Languages) => data)
      .catch(errorHandler)) as Languages;
  }
}
