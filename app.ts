import { green, yellow } from "https://deno.land/std@0.142.0/fmt/colors.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

const LOCALHOST: string = "127.0.0.1";
const PORT: number = 8080;

const url: string = `${LOCALHOST}:${PORT}`;

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

console.log(`${yellow("Listening on ")}${green(url)}`);

await app.listen(url);
