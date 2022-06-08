import { Router } from "https://deno.land/x/oak/mod.ts";
import * as githubApiCtrl from "./github/github-api.ctrl.ts";

const router = new Router();

router.get("/users/:userName", githubApiCtrl.getUser);
router.get("/search/users/:q", githubApiCtrl.searchUsers);

export default router;
