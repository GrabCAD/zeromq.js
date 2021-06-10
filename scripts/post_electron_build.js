/* eslint-disable no-sync */
const path = require('path');
const fs = require("fs-extra");

fs.copySync(path.join(__dirname, "..", "bin", `win32-x64-87`, "zeromq.js.node"), path.join(__dirname, "..", "bin", "electron", "zmq.node"));
fs.emptyDirSync(path.join(__dirname, "..", "bin", `win32-x64-87`));
fs.rmdirSync(path.join(__dirname, "..", "bin", `win32-x64-87`));
