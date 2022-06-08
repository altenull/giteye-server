import { errorHandler } from "./github-api.helper.ts";
import { githubApiInstance } from "./github-api.ts";
import { GithubUser, User } from "./models/user.model.ts";
import { githubUserToUser } from "./parsers/user.parser.ts";

const GITHUB_API_END_POINT = "https://api.github.com";

export default class GithubApiService {
  async getUser(userName: string): Promise<User> {
    const url = `${GITHUB_API_END_POINT}/users/${userName}`;

    return (await githubApiInstance<GithubUser>(url)
      .then(githubUserToUser)
      .catch(errorHandler)) as User;
  }

  async serachUsers(q: string): Promise<any> {
    const url = `${GITHUB_API_END_POINT}/search/users?q=${q}`;

    return (await githubApiInstance<any>(url).catch(errorHandler)) as any;
  }
}
