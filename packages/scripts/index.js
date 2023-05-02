#!/usr/bin/env node
const { createServer } = require("vite");
const devSiteConf = require("./config/site-web.dev");
const { Command } = require("commander");

const program = new Command()

program.version("1.0.0").usage("command [options]");

program
  .command("dev:site")
  .description("启动web站点开发环境")
  .action(async () => {
    await runDev();
  });

program.parse(process.argv);

async function runDev() {
  console.log("kaishi");
  const server = await createServer(devSiteConf);
  await server.listen();
  console.log("jieshu");
}

// runDev();
