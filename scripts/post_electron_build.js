/* eslint-disable no-sync */
// Special script run as part of grunt rebuild-native-modules
const path = require('path');
const copyFolderSync = require('./copy_folder_sync');

copyFolderSync(path.join(__dirname, "..", "build", `Release`), path.join(__dirname, "..", "bin", "electron"));

