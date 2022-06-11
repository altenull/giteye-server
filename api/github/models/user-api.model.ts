export interface GetGithubSerachUsersResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubSearchUser[];
}
