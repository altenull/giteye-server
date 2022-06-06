const getGithubApiRequestHeaders = () => {
  const requestHeaders = new Headers();

  requestHeaders.append("Accept", "application/vnd.github.v3+json");
  requestHeaders.append(
    "Authorization",
    `token ${Deno.env.get("GITHUB_ACCESS_TOKEN")}`
  );

  return requestHeaders;
};

export const githubApiInstance = <T>(url: string): Promise<T> =>
  fetch(url, {
    headers: getGithubApiRequestHeaders(),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json() as Promise<T>;
    })
    .catch((error: Error) => {
      throw error; // Rethrow the error so that consumer can still catch it.
    });
