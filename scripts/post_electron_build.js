/* eslint-disable no-sync */
const path = require('path');
const fs = require("fs-extra");

fs.copySync(path.join(__dirname, "..", "build", `Release`, "zmq.node"), path.join(__dirname, "..", "bin", "electron", "zmq.node"));


