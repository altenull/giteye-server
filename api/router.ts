import { Router } from "https://deno.land/x/oak/mod.ts";
import * as githubApiCtrl from "./github/github-api.ctrl.ts";

const router = new Router();

// User
router.get("/users/:userName", githubApiCtrl.getUser);
router.get("/search/users/:q", githubApiCtrl.searchUsers);

// Repo
router.get("/repos/:userName", githubApiCtrl.getRepos);

// Languages
router.get("/languages/:userName/:repoName", githubApiCtrl.getLanguages);

export default router;
