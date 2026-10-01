const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

// C4: auth() must fail closed when MACS_COMMAND_TOKEN is unset, whatever NODE_ENV says.
// Before the fix, a missing token + NODE_ENV != "production" made every /api/* route public.

async function statusWithEnv(env) {
  const saved = { token: process.env.MACS_COMMAND_TOKEN, nodeEnv: process.env.NODE_ENV };
  delete process.env.MACS_COMMAND_TOKEN;
  if (env === undefined) delete process.env.NODE_ENV; else process.env.NODE_ENV = env;
  delete require.cache[require.resolve("../app/server.js")];
  const server = require("../app/server.js");
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const port = server.address().port;
  const res = await new Promise((resolve, reject) => {
    http.get({ host: "127.0.0.1", port, path: "/api/overview" }, resolve).on("error", reject);
  });
  server.close();
  if (saved.token === undefined) delete process.env.MACS_COMMAND_TOKEN; else process.env.MACS_COMMAND_TOKEN = saved.token;
  if (saved.nodeEnv === undefined) delete process.env.NODE_ENV; else process.env.NODE_ENV = saved.nodeEnv;
  return res.statusCode;
}

test("no token + NODE_ENV unset -> 401", async () => {
  assert.equal(await statusWithEnv(undefined), 401);
});
test("no token + NODE_ENV=development -> 401", async () => {
  assert.equal(await statusWithEnv("development"), 401);
});
test("no token + NODE_ENV=production -> 401", async () => {
  assert.equal(await statusWithEnv("production"), 401);
});
