'use strict';

const electronRebuild = require("electron-rebuild");
const path = require("path");
electronRebuild.rebuild({buildPath: path.resolve(__dirname, ".."), electronVersion: "9.3.3", force: true});