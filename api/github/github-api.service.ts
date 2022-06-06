import { githubApiInstance } from "./github-api.ts";
import { errorHandler } from "./github-api.helper.ts";

const GITHUB_API_END_POINT = "https://api.github.com";

export default class GithubApiService {
  async getUser(userName: string): Promise<any> {
    const url = `${GITHUB_API_END_POINT}/users/${userName}`;

    return (await githubApiInstance<any>(url).catch(errorHandler)) as any;
  }

  async serachUsers(q: string): Promise<any> {
    const url = `${GITHUB_API_END_POINT}/search/users?q=${q}`;

    return (await githubApiInstance<any>(url).catch(errorHandler)) as any;
  }
}
