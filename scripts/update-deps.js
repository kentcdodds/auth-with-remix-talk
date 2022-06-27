const cp = require("child_process");
const { runInDirs } = require("./utils");

const [, , ...dirs] = process.argv;
runInDirs("npx npm-check-updates --dep prod,dev --upgrade", dirs);
