import GithubApiService from "./github-api.service.ts";
import { Response } from "https://deno.land/x/oak/mod.ts";

const githubApiService = new GithubApiService();

export const getUser = async ({
  params,
  response,
}: {
  params: { userName: string };
  response: Response;
}) => {
  const gitraceUser: any = await githubApiService.getUser(params.userName);

  if (gitraceUser != null) {
    response.status = 200;
    response.body = gitraceUser;
  }
};

export const searchUsers = async ({
  params,
  response,
}: {
  params: { q: string };
  response: Response;
}) => {
  const serachUsersResult: any = await githubApiService.serachUsers(params.q);

  if (serachUsersResult != null) {
    response.status = 200;
    response.body = serachUsersResult;
  }
};
