const cp = require("child_process");
const { runInDirs } = require("./utils");

const [, , ...dirs] = process.argv;
runInDirs("npm run --if-present setup", dirs);
