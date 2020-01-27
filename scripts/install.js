/* eslint-disable no-sync */
const child_process = require("child_process");
const fs = require('fs-extra');
const path = require('path');
const copyFolderSync = require('./copy_folder_sync');

if (fs.existsSync(path.join(__dirname, "..", "node_modules"))) {
    // Only attempt to build this module if we are running yarn in the context
    // of a development environment - not as part of packaging the various
    // components up for app.asar and a production build. Absence of a local
    // node_modules is considered as building for production (via grunt dist)

    // Now build the node version
    child_process.execSync("npm run-script doInstall");

    // Now copy the results to bin/node/...
    copyFolderSync(path.join(__dirname, "..", "build", "Release"), path.join(__dirname, "..", "bin", "node"));
}
